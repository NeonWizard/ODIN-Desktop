<template>
  <div class="secondary-color">
    This is the <span class="primary-color">Help page</span>. This is some body text.
  </div>
</template>

<script>
export default {
  name: 'Help',
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
