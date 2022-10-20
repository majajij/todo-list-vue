import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: ['mehdi', 'younes']
  },
  getters: {
    getTasks: (state) => state.tasks
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
    }
  },
  modules: {
  }
})
