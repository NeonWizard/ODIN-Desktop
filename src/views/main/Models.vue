<template>
  <div class="secondary-color">
    This is the <span class="primary-color">Models page</span>. This is some body text.
  </div>
</template>

<script>
export default {
  name: 'Models',
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
