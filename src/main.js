// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'Vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
