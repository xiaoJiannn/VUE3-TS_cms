import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import "./assets/css/index.css";
import { reloadVuexData } from "./store";
// import { loadGobalData } from "./store";

reloadVuexData();
// loadGobalData();
createApp(App).use(store).use(router).mount("#app");
console.log(process.env.VUE_APP_BASE_URL);
