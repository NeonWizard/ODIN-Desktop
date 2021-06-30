import {
  checkIsAuthenticated,
  loginUser
} from '@/store/apiModules/auth.api'

function initialState() {
  return {
    apiToken: '',
    isSignedIn: false,
    username: '',
  }
}

const auth = {
  namespaced: true,
  state: initialState,
  mutations: {
    setUserData(state, value) {
      state.apiToken = value.token
      state.username = value.username
      state.isSignedIn = value.token !== ''

      if (value.updateStorage === true) {
        localStorage.setItem('UserToken', value.token)
        localStorage.setItem('Username', value.username)
      }
    }
  },
  actions: {
    async checkIsAuthenticated({ state, commit }) {
      const userData = {
        token: '',
        username: '',
        updateStorage: true
      }

      const userToken = localStorage.getItem('UserToken')
      if (userToken && userToken !== '') {
        const res = await checkIsAuthenticated(userToken)
        if (res && !res.error) {
          userData.token = userToken
          userData.username = localStorage.getItem('Username')
        }
      }

      commit('setUserData', userData)
      return state.isSignedIn
    },
    async login({ rootState, commit }, credentials) {
      const res = await loginUser(rootState.auth.apiToken, credentials)
      if (res && !res.error) {
        const userData = {
          token: res.token,
          username: credentials.username,
          updateStorage: true
        }
        await commit('setUserData', userData)
        return null
      } else {
        return res.error
      }
    },
    async logout({ commit }) {
      const userData = {
        token: '',
        username: '',
        updateStorage: true
      }
      await commit('setUserData', userData)
    }
  }
}

export default auth
