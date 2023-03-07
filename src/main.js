import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "jquery";

// // <!-- jQuery Scripts -->
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/plugins.js";
// // import "./assets/revolution/js/jquery.themepunch.tools.min.js";
// import "./assets/revolution/js/jquery.themepunch.revolution.min.js";
// import "./assets/js/rev-slider.js";
// import "./assets/js/scripts.js";

// //  Rev Slider Offline Scripts
// import "./assets/revolution/js/extensions/revolution.extension.video.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.carousel.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.slideanims.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.actions.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.layeranimation.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.kenburn.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.navigation.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.migration.min.js";
// import "./assets/revolution/js/extensions/revolution.extension.parallax.min.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
