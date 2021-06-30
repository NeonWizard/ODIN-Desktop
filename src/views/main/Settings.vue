<template>
  <div class="secondary-color">
    This is the <span class="primary-color">Settings page</span>. This is some body text.
  </div>
</template>

<script>
export default {
  name: 'Settings',
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
