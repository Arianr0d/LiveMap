import Vue from 'vue'
import Vuex from 'vuex'
import coord from './models/coord'
import problem from './models/problem'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    coord,
    problem
  }
})
