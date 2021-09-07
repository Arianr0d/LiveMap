import Vue from 'vue'
import Vuex from 'vuex'
import coord from './models/coord'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    coord
  }
})
