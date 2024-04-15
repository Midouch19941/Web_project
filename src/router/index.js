import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import { projectMetaData } from "../components/projects/projectMeta";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/panier",
      name: "panier",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/reservation",
      name: "reservation",
      component: () => import("../views/ReservationView.vue"),
    },
    {
      path: "/review",
      name: "review",
      component: () => import("../views/ReviewView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/AddMenuView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
