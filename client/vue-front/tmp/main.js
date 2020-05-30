import Vue from "vue";
import App from "./App.vue";
import router from "./route/index"; // import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
new Vue({
  render: function render(h) {
    return h(App);
  },
  router: router,
  components: {
    App: App
  }
}).$mount("#app");