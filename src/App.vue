<template>
  <div id="app" v-loading="loading">
    <router-view v-if="serverOnline" />
    <AppOutage v-else />
  </div>
</template>

<script>
import AppOutage from '@/views/AppOutage.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    AppOutage
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapState('common', [
      'serverOnline'
    ])
  },
  async mounted() {
    this.loading = true

    // Vuex fetchers that run once upon loading the application
    await this.$store.dispatch('common/fetchServerStatus')

    this.loading = false
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

  html {
    height: 100%;
  }

  body {
    margin: 0;
  }

  #app {
    font-family: "Montserrat";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }
</style>
