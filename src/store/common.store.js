import {
  fetchServerStatus
} from '@/store/apiModules/common.api'

import isElectron from 'is-electron'

function initialState() {
  return {
    isElectron: isElectron(),
    serverOnline: true
  }
}

const common = {
  namespaced: true,
  state: initialState,
  mutations: {
    setServerOnline(state, value) {
      state.serverOnline = value
    }
  },
  actions: {
    async fetchServerStatus({ commit }) {
      const res = await fetchServerStatus()
      commit('setServerOnline', res.online)
    }
  }
}

export default common
