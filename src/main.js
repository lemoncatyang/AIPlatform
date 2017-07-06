// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'Vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import axios from 'axios';
import store from './store/store';
import 'element-ui/lib/theme-default/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.component(CollapseTransition.name, CollapseTransition);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

var axiosInstance = axios.create({
  baseURL: 'http://localhost:8686/api/'
});

Vue.prototype.$http = axiosInstance;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    if (window.localStorage.token !== null) {
      this.$http.defaults.headers.common['Authorization'] = this.$store.getters.token;
    }
  }
});
