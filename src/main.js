import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";

import App from "./App.vue";
import Home from "./views/Home";
import Pets from "./views/Pets";
import Favorites from "./views/Favorites";
import Form from "./views/Form";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets },
  { path: "/favorites", component: Favorites },
  { path: "/form", component: Form }
];
const router = new VueRouter({ routes });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
