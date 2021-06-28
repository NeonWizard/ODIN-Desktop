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

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
