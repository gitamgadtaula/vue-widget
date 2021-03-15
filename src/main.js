import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import customElement from "vue-custom-element";
import 'document-register-element/build/document-register-element'
Vue.use(customElement);

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
Vue.customElement("vue-widget", App);
