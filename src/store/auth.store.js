import {
  checkIsAuthenticated,
  loginUser
} from '@/store/apiModules/auth.api'

function initialState() {
  return {
    isAuthenticated: false,
    username: localStorage.getItem('Username') ?? '',
    userToken: localStorage.getItem('UserToken') ?? '',
  }
}

const auth = {
  namespaced: true,
  state: initialState,
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value
    },
    setUserData(state, value) {
      state.userToken = value.token
      state.username = value.username

      localStorage.setItem('UserToken', value.token)
      localStorage.setItem('Username', value.username)
    }
  },
  actions: {
    async checkIsAuthenticated({ state, commit }) {
      if (state.userToken && state.userToken !== '') {
        const res = await checkIsAuthenticated(state.userToken)
        if (res && !res.error) {
          commit('setIsAuthenticated', true)
        }
      } else {
        commit('setIsAuthenticated', false)
      }
      return state.isAuthenticated
    },

    async login({ rootState, commit }, credentials) {
      const res = await loginUser(rootState.auth.userToken, credentials)
      if (res && !res.error) {
        const userData = {
          token: res.token,
          username: credentials.username
        }
        commit('setUserData', userData)
        return {}
      } else {
        return { error: res.error }
      }
    },

    async logout({ commit }) {
      const userData = {
        token: '',
        username: ''
      }
      commit('setUserData', userData)
    }
  }
}

export default auth
