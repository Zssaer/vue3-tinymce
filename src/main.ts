import { createApp } from "vue";
import App from "./App.vue";
import TinyMceEditor from "../packages/index";

createApp(App).use(TinyMceEditor).mount("#app");
