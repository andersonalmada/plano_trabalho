import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "@/views/Login.vue";
import Manager from "@/views/Manager.vue";
import Users from "@/views/Users.vue";
import UserAdd from "@/views/User-Add.vue";
import UserEdit from "@/views/User-Edit.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/manager",
    name: "Manager",
    component: Manager,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/user-add",
    name: "UserAdd",
    component: UserAdd,
  },
  {
    path: "/user-edit/:id",
    name: "UserEdit",
    props: true,
    component: UserEdit,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
