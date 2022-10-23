import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: localStorage.getItem('_token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    tasks: ['mehdi', 'younes', "arabi"],
    histories: [
      {
        status: 1,
        datetime: "12:30:45 12:00:00"
      },
      {
        status: 0,
        datetime: "12:30:45 12:00:00"
      },
      {
        status: 1,
        datetime: "12:30:45 12:00:00"
      },
    ],
  },
  getters: {
    getTasks: (state) => state.tasks,
    getHistories: (state) => state.histories,
    getUser: (state) => state.user,
    getToken: (state) => state.token
  },
  mutations: {
    ADD_TO_LIST: (state, payload) => {
      state.tasks.push(payload.task)
    },
    DELETE_FROM_LIST: (state, payload) => {
      // state.tasks.filter(t => t != payload.task)
      // alert("delete")
      let new_list = state.tasks.filter(t => t != payload.task)
      state.tasks = [...new_list]
      // console.log(state.tasks);
    },
    AUTHENTICATE: (state, payload) => {
      state.user = payload.user
      state.token = payload.authorisation.token
      localStorage.setItem('_token', payload.authorisation.token)
      localStorage.setItem('user', JSON.stringify(payload.user))
    },
    REGISTER: (state, payload) => {
      state.user = payload.user
      state.token = payload.authorisation.token
      localStorage.setItem('_token', payload.authorisation.token)
      localStorage.setItem('user', JSON.stringify(payload.user))
    }
  },
  actions: {
    // { commit }
    addToList: ({ commit }, data) => {
      // console.log(commit);
      // console.log("value from action " + data.task);
      commit("ADD_TO_LIST", data)
    },

    deleteFromList: ({ commit }, data) => {
      // console.log(commit);
      // console.log("value from action " + data.task);
      commit("DELETE_FROM_LIST", data)
    },

    authenticate: ({ commit }, credentials) => {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/login', credentials)
          .then((res) => {
            commit('AUTHENTICATE', res.data)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    register: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/register', data)
          .then((res) => {
            commit('REGISTER', res.data)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
