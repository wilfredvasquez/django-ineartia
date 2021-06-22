import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress/src'
import axios from "axios";

let csrftoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
axios.defaults.csrfmiddlewaretoken = csrftoken;

import Pages from "./Pages/pages.js";

const pages = {
  ...Pages
};

let customRoute = (...args) => {
  args[0] = args[0];
  let route =  window.reverseUrl(...args);
  return route;
}

InertiaProgress.init();

createInertiaApp({
  page: JSON.parse(document.getElementById("page").textContent),
  resolve: name => require(`./Pages/${pages[name]}`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .mixin({ methods: { route: customRoute }})
      .mount(el)
  },
})