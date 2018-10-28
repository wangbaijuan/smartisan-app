import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    profile: "",
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count >= 5 && (state.count = 5);
      if(state.count < 5) {
        state.count++
      }
    },
    login (state) {
      
    }
  }
})
