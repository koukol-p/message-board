import { createRouter, createWebHistory } from "vue-router";
import AuthView from "@/views/AuthView.vue";
import MainView from "../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/",
      name: "main",
      component: MainView,
    },
  ],
});

export default router;
