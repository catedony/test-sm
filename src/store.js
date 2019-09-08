import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testCount: 0,
    testArray: []
  },
  mutations: {
    updateCount (state, val) {
      state.testCount += val
    },
    removeFromArray (state, index) {
      state.testArray.splice(index, 1)
    },
    addToArray (state, elem) {
      state.testArray.push(elem)
    }
  }
})
