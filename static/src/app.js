import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import axios from "axios";
import PortalVue from 'portal-vue'
import { InertiaProgress } from '@inertiajs/progress/src'


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

Vue.config.productionTip = true;

Vue.use(plugin);
Vue.use(PortalVue);

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

import Notes from "./Pages/Notes/Index.Vue";
import Details from "./Pages/Notes/Details.Vue";

const pages = {
    'Notes': Notes,
    'Details': Details,
}

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