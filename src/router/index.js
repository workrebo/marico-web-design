import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue";
import about from "../views/AboutView.vue";
import pricing from "../views/Pricing.vue";
import blog from "../views/Blog.vue";
import login from "../views/LogIn.vue";
import signup from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: { layouts: "main" },
  },
  {
    path: "/about",
    name: "about",
    component: about,
    // meta: {layouts: 'empty'}
    meta: { layouts: "main" },
  },
  {
    path: "/pricing",
    name: "pricing",
    component: pricing,
    // meta: {layouts: 'empty'}
    meta: { layouts: "main" },
  },
  {
    path: "/blog",
    name: "blog",
    component: blog,
    // meta: {layouts: 'empty'}
    meta: { layouts: "main" },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    // meta: {layouts: 'empty'}
    meta: { layouts: "main" },
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
    // meta: {layouts: 'empty'}
    meta: { layouts: "main" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
