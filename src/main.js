import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import elementLocale from 'element-ui/lib/locale/lang/en'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale: elementLocale })

if (process.env.VUE_APP_USE_MOCK === 'true') {
  const { worker } = require('@/mock/browser')
  worker.start({ onUnhandledRequest: 'bypass' })
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
