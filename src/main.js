import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.postcss";
import CodeLoader from "@/components/CodeLoader.vue";
import "./plugins/axe.js";
import "prismjs";
import "prismjs/themes/prism.css";
Vue.config.productionTip = false;
Vue.component("code-loader", CodeLoader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
