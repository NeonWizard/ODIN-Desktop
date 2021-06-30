<template>
  <div class="browser-wrapper" :class="{'browser-wrapper-web': !isElectron}">
    <div id="home-page" :class="{'home-page-web': !isElectron}">
      <Header />
      <transition name="fade" mode="out-in">
        <router-view id="app-body" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

import isElectron from 'is-electron'

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      isElectron: isElectron()
    }
  }
}
</script>

<style>
  * {
    letter-spacing: -0.5px;
  }
</style>

<style lang="scss" scoped>
  // Electron vs Web stuff
  .browser-wrapper-web {
    box-sizing: border-box;
    padding: 70px 130px;
    background-color: #272a2e;
  }
  .home-page-web {
    border-radius: 20px;
  }

  // Transitions
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0.2;
  }

  // -----

  .browser-wrapper {
    height: 100%;
  }

  #home-page {
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
