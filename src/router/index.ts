import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import localStroge from "@/utils/localStroge";
import { firstMenu } from "@/utils/map_menus";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",

    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",

    component: () => import("@/views/not-found/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  let token = "";
  if (to.path !== "/login") {
    token = localStroge.getUserAcount("token");
    if (!token) {
      return "/login";
    }
  }
  if (to.path === "/main") {
    return firstMenu.url;
  }
});
export default router;
