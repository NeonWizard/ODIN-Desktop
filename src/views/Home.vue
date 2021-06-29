<template>
  <div class="browser-wrapper" :class="{'browser-wrapper-web': !isElectron}">
    <div id="home-page" :class="{'home-page-web': !isElectron}">
      <Header />
      <div id="app-body">
        <span class="tc-secondary">This is</span> some text <span class="tc-secondary">that is contained within the body of the app</span>
      </div>
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
  .browser-wrapper {
    height: 100%;
  }
  .browser-wrapper-web {
    box-sizing: border-box;
    padding: 70px 130px;
    background-color: #23272a;
  }
  #home-page {
    height: 100%;
    background-color: #171819;
    color: $primary-color;
  }
  .home-page-web {
    border-radius: 20px;
  }

  #app-body {
    padding: 30px;
  }
</style>
