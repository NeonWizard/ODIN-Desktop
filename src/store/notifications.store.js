import {
  fetchPendingNotifications
} from '@/store/apiModules/notifications.api'

function initialState() {
  return {
    pendingNotifications: []
  }
}

const notifications = {
  namespaced: true,
  state: initialState,
  mutations: {
    dispatchNotification(state, value) {
      state.pendingNotifications.push(value)
    },
    setPendingNotifications(state, value) {
      state.pendingNotifications = value
    }
  },
  actions: {
    async fetchPending({ rootState, commit }) {
      const res = await fetchPendingNotifications(rootState.auth.userToken)
      await commit('setPendingNotifications', res ?? [])
    }
  }
}

export default notifications
