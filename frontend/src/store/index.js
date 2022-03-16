import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    haveAccount: true,
    status: '',
    user: {
      id: -1,
      token: ""
    },
  },

  mutations: {
    PAGE_CONNEXION (state) {
      state.haveAccount = false
    },

    PAGE_INSCRIPTION (state) {
      state.haveAccount = true
    },

    setStatus (state, status) {
      state.status = status
    },

    logUser (state, user) {
      state.user = user
    }

    
  },

  actions: {
    changeTemplate (context) {
      if (context.state.haveAccount === true ) {
        context.commit('PAGE_CONNEXION')
      } else {
        context.commit('PAGE_INSCRIPTION')
      }
    },

    login ({commit}, userInfos) {    //Remettre resolve, reject pour envoyer la promise vers le composant login (pareil pour register)
      commit("setStatus", "loading")
      return new Promise((resolve, reject) => {
        axios.post("http://localhost:3000/api/auth/login", userInfos)
        .then(res => {
          commit("setStatus", "logged")
          commit("logUser", res.data)
          resolve(res)
        })
        .catch(err => {
          commit("setStatus", "error_login")
          reject(err)
        })
      })
    },

    register ({commit}, userInfos) {
      return new Promise((resolve, reject) => {
        commit("setStatus", "loading")
        console.log(userInfos);
        axios.post("http://localhost:3000/api/auth/signup", userInfos)
        .then(res => {
          resolve(res)
          commit("setStatus", "")
        })
        .catch(err => {
          commit("setStatus", "error_create")
          reject(err)
        })
      })
    },
  },

  modules: {

  }

})
