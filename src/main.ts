import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(pinia).use(naive).use(router).mount("#app");
