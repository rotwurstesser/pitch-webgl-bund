import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.postcss";
import CodeLoader from "@/components/CodeLoader.vue";
import Prism from "vue-prism-component";
import "prismjs";
import SVGIcon from "@/components/SVGIcon";
import Btn from "@/components/Btn";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-bash";
Vue.config.productionTip = false;
Vue.component("code-loader", CodeLoader);
Vue.component("prism", Prism);
Vue.component("svg-icon", SVGIcon);
Vue.component("btn", Btn);

// store the original tab title
const origTitle = document.title;
// function to change title when focusing on tab
function setOldTitle() {
  document.title = origTitle;
}
// function to change title when un-focusing on tab
function setNewTitle() {
  document.title = "Thank you for visiting!";
}
// bind functions to blur and focus events
window.onblur = setNewTitle;
window.onfocus = setOldTitle;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
