import {
  fetchServerStatus
} from '@/store/apiModules/common.api'

function initialState() {
  return {
    serverOnline: true,
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
    async fetchServerStatus({ rootState, commit }) {
      const res = await fetchServerStatus(rootState.auth.apiToken)
      commit('setServerOnline', res.online)
    }
  }
}

export default common
