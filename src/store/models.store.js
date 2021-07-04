import {
  fetchModels,
  generate
} from '@/store/apiModules/models.api'

function initialState() {
  return {
		models: []
  }
}

const common = {
  namespaced: true,
  state: initialState,
  mutations: {
    setModels(state, value) {
      state.models = value
    }
  },
  actions: {
    async fetchModels({ rootState, commit }) {
      const res = await fetchModels(rootState.auth.userToken)
      commit('setModels', res.models ?? [])
    },

    async generate({ rootState }, modelName, body) {
      const res = await generate(rootState.auth.userToken, modelName, body)
      return res
    }
  }
}

export default common
