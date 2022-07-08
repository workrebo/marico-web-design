import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "../src/assets/fonts.css";
import "./assets/reset.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";

createApp(App).use(router).mount("#app");
