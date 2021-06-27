<template>
  <div>
    <div id="login-box">
      <input id="username-input" v-model="username">
      <input id="password-input" v-model="password">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
  },
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
