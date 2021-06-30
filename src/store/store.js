import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/auth.store'
import common from '@/store/common.store'
import notifications from '@/store/notifications.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    common,
    notifications
  }
})
