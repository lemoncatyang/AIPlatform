import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';

Vue.use(Vuex);

const store = new Vuex.Store({
  created() {
    console.log('123');
  },
  state: {
    user: {},
    access_token: null,
    role: {},
    token_type: null
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      state.access_token = data.access_token;
      state.token_type = data.token_type;
      window.localStorage.token = data.token_type + ' ' + data.access_token;
      alert(window.localStorage.token);
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      this.$http.defaults.headers.common['Authorization'] = null;
    }
  },
  getters: {
    token: () => {
      return window.localStorage.token;
    }
  }
});

export default store;
