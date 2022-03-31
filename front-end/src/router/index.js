import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "@/views/Login.vue";
import Manager from "@/views/Manager.vue";
import Users from "@/views/Users.vue";
import UserAdd from "@/views/User-Add.vue";
import UserEdit from "@/views/User-Edit.vue";
import UserView from "@/views/User-View.vue";
import ModelPlans from "@/views/Model-Plans.vue";
import ModelPlanView from "@/views/Model-Plan-View.vue";
import ModelPlanEdit from "@/views/Model-Plan-Edit.vue";
import PlanUser from "@/views/Plan-User.vue";
import PlanUserEdit from "@/views/Plan-User-Edit.vue";
import PlanUserView from "@/views/Plan-User-View.vue";
import PlanAdmEdit from "@/views/Plan-Adm-Edit.vue";
import PlanAdmView from "@/views/Plan-Adm-View.vue";
import Plans from "@/views/Plans.vue";
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
  {
    path: "/user-view/:id",
    name: "UserView",
    props: true,
    component: UserView,
  },
  {
    path: "/models",
    name: "ModelPlans",
    component: ModelPlans,
  },
  {
    path: "/model-edit",
    name: "ModelPlanEdit",
    component: ModelPlanEdit,
  },
  {
    path: "/model-view",
    name: "ModelPlanView",
    component: ModelPlanView,
  },
  {
    path: "/plan-user",
    name: "PlanUser",
    component: PlanUser,
  },
  {
    path: "/plan-user-edit",
    name: "PlanUserEdit",
    component: PlanUserEdit,
  },
  {
    path: "/plan-user-view",
    name: "PlanUserView",
    component: PlanUserView,
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans,
  },
  {
    path: "/plan-adm-view/:id",
    name: "PlanAdmView",
    props: true,
    component: PlanAdmView,
  },
  {
    path: "/plan-adm-edit/:id",
    name: "PlanAdmEdit",
    props: true,
    component: PlanAdmEdit,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
