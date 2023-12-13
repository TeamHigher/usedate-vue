import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
import axios from "./axios"; // Import the Axios instance

Vue.config.productionTip = false;

Vue.prototype.$axios = axios; // Attach Axios to Vue's prototype

new Vue({
  render: (h) => h(App),
}).$mount("#app");
