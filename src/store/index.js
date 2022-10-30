import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: localStorage.getItem('_token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    tasks: [],
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
    getToken: (state) => state.token,
    isAuthenticated: (state) => state.token ? true : false
  },
  mutations: {
    ADD_TO_LIST: (state, payload) => {
      state.tasks.push(payload.data)
    },

    DELETE_FROM_LIST: (state, payload) => {
      let new_list = state.tasks.filter(t => t.id != payload.task_id)
      state.tasks = [...new_list]
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
    },

    GET_LIST: (state, payload) => {
      // state.tasks = payload.data.data
      state.tasks = payload.data
    }
  },
  actions: {
    addToList: ({ commit, state }, data) => {
      let config = {
        headers: {
          Authorization: 'Bearer ' + state.token,
        }
      }

      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/my_list', {
          task: data.task
        }, config).then((res) => {
          commit("ADD_TO_LIST", res.data)
        }).catch((err) => {
          reject(err)
        })
      })
    },

    deleteFromList: ({ commit, state }, data) => {
      let config = {
        headers: {
          Authorization: 'Bearer ' + state.token,
        }
      }

      return new Promise((resolve, reject) => {
        axios.delete('http://localhost:8000/api/my_list/' + data.task_id, config).then(() => {
          commit("DELETE_FROM_LIST", data)
        }).catch((err) => {
          reject(err.response.data)
        })
      })
    },

    //AUTH

    authenticate: ({ commit }, credentials) => {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/login', credentials)
          .then((res) => {
            commit('AUTHENTICATE', res.data)
            resolve()
          })
          .catch((err) => {
            reject(err.response.data)
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
            reject(err.response.data)
          })
      })
    },

    //LIST

    getList: ({ commit, state }) => {
      let config = {
        headers: {
          Authorization: 'Bearer ' + state.token,
        }
      }
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/my_list', config).then(res => {
          commit('GET_LIST', res.data)
          resolve()
        }).catch(err => {
          reject(err.response.data)
        })
      })
    }
  },
  modules: {
  }
})
