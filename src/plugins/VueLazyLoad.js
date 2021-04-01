import Vue from "vue";
import VueLazyLoad from "vue-lazyload";

const loader = require("../assets/loader.gif");

Vue.use(VueLazyLoad, {
  loading: loader
});
