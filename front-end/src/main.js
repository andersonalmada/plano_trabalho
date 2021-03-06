import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

var app = new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
