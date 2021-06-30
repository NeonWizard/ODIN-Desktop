<template>
  <div class="secondary-color">
    Welcome to the <span class="primary-color">Home page</span>! This is some body text.
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .primary-color {
    color: $primary-color;
  }
  .secondary-color {
    color: $secondary-color;
  }
</style>
