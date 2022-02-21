import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    haveAccount: true,
    
  },

  mutations: {
    PAGE_CONNEXION (state) {
      state.haveAccount = false
    },

    PAGE_INSCRIPTION (state) {
      state.haveAccount = true
    }
  },

  actions: {
    changeTemplate (context) {
      if (context.state.haveAccount === true ) {
        context.commit('PAGE_CONNEXION')
      } else {
        context.commit('PAGE_INSCRIPTION')
      }
    }
  },

  modules: {

  }

})
