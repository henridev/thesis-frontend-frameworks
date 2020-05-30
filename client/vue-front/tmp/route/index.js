import Vue from "vue";
import Router from "vue-router";
import Todo from "../pages/Todo";
import Home from "../pages/Home";
import Authorization from "../pages/Authorization";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [{
    path: "/",
    name: "home",
    component: Home
  }, {
    path: "/todos",
    name: "Todo",
    component: Todo
  }, {
    path: "/authorization",
    name: "Auhtorization",
    component: Authorization
  }]
});