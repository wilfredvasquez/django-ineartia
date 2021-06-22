import { App, plugin } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import axios from "axios";
// import PortalVue from 'portal-vue';
import { InertiaProgress } from '@inertiajs/progress/src'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import "../css/app.css"

let csrftoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
axios.defaults.csrfmiddlewaretoken = csrftoken;


Vue.config.productionTip = true;
Vue.use(plugin);
// Vue.use(PortalVue);
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

let customRoute = (...args) => {
    args[0] = args[0];
    let route =  window.reverseUrl(...args);
    return route;
}

Vue.mixin({ methods: { route: customRoute }});

InertiaProgress.init();

const app = document.getElementById('app');
// we are getting the initialPage from a rendered json_script
const page = JSON.parse(document.getElementById("page").textContent);

import Pages from "./Pages/pages.js";

const pages = {
  ...Pages
};

new Vue({
  render: h => h(App, {
    props: {
      initialPage: page,
      resolveComponent: (name) => {
        console.log("resolveComponent ", name, pages[name])
        return pages[name];
      },
    },
  }),
}).$mount(app)