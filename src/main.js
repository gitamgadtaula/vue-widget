import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import vueCustomElement from "vue-custom-element";
import 'document-register-element/build/document-register-element'
Vue.use(vueCustomElement);

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
Vue.customElement("vue-widget", App);
