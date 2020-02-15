import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // 把 store 绑到 Vue.prototype.$store = store

const store = new Vuex.Store({
  state: { // data
    count: 0
  },
  mutations: { // methods
    increment(state, n: number) {
      state.count += n;
    }
  }
});

export default store;
