import { createStore } from 'vuex'

export default createStore({
  state: {
    personalDataState: []
  },
  mutations: {
    setPersonalData(state, info) {
      state.personalDataState.push(info)
    }
  },
  actions: {
    setPersonalData(vuexContext, personalData) {
      vuexContext.commit('setPersonalData', personalData)
    }
  },
  getters: {
    loadedPersonalData(state) {
      return state.personalDataState
    }
  },
  modules: {
  }
})
