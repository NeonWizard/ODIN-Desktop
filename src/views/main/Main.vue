<template>
  <div id="wrapper" :class="{'browser-wrapper': !isElectron}">
    <div id="app-page" :class="{'app-page-web': !isElectron}">
      <Header />
      <transition name="fade" mode="out-in">
        <router-view id="app-body" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('common', [
      'isElectron'
    ])
  }
}
</script>

<style>
  * {
    letter-spacing: -0.5px;
  }
</style>

<style lang="scss" scoped>
  // -- Electron vs Web stuff
  .browser-wrapper {
    box-sizing: border-box;
    padding: 70px 130px;
    background-color: #272a2e;
  }
  .app-page-web {
    border-radius: 20px;
  }

  // -- Transitions
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0.2;
  }

  // -----

  #wrapper {
    height: 100%;
  }

  #app-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #171819;
    color: $primary-color;
  }

  #app-body {
    flex: 1;
    padding: 30px;
  }
</style>
