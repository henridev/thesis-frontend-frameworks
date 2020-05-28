import Vue from "vue";
import App from "./App.vue";
import router from "./route/index";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount("#app");
