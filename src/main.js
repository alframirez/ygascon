// import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
createApp(App).use(router).mount("#app");
