import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex)

let user = localStorage.getItem('user')
if (!user) {
  user = {
    id: -1,
    token: ''
  }
} else {
  try {
    user = JSON.parse(user)
    axios.defaults.headers.common['Authorization'] = user.token
  } catch (err) {
    user = {
      id: -1,
      token: ''
    }
  }
}

export default new Vuex.Store({

  state: {
    haveAccount: true,
    status: '',
    user: user,
    userInfos : {
      firstName: "",
      lastName: "",
      email: "",
    }
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
      localStorage.setItem('user', JSON.stringify(user))
      axios.defaults.headers.common['Authorization'] = user.token
    },

    userInfos (state, userInfos) {
      state.userInfos = userInfos
    },

    logout (state) {
      state.user = {
        id: -1,
        token: ''
      }
      localStorage.removeItem('user')
    },

    
  },

  actions: {
    changeTemplate (context) {
      if (context.state.haveAccount === true ) {
        context.commit('PAGE_CONNEXION')
      } else {
        context.commit('PAGE_INSCRIPTION')
      }
    },

    login ({commit}, userInfos) {
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

    getUserInfos ({commit}) {
      axios.get(`http://localhost:3000/api/auth/infos`,)  
        .then(res => {
          // console.log(res);
          commit("userInfos", res.data.results[0])    // Ici on recup un tableau avec un seul objet, Pourquoi ??
          console.log(res.data.results[0]);
          
        })
        .catch(err => {
          console.log(err);
        })
    },

    deleteUser ({commit}) {
      axios.delete('http://localhost:3000/api/auth/delete')
      commit('logout')
    }

    

  },


  modules: {

  }

})
