import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'fan',
    age: 27
  },
  getters: {
    getName: (state) => state.name,
    getAge: (state) => state.age
  },
  mutations: {
    setName: (state, data) => {
      return state.name = data
    },
    setAge: (state, data) => state.age = data
  },
  actions: {
  },
  modules: {
  }
})
