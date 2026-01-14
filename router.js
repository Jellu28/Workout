import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./MainPage.vue";
import TariffsPage from "./TariffsPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: MainPage,
      alias: "/",
    },
    {
      path: "/tariffs",
      component: TariffsPage,
    },
  ],
});
