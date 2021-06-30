<template>
  <div id="user-dropdown" @click="clicked">
    <img id="user-image" src="https://avatars.githubusercontent.com/u/1355586">
    <i class="el-icon-arrow-down" />
  </div>
</template>

<script>
export default {
  name: 'UserDropdown',
  components: {},
  methods: {
    clicked() {
      this.$message.info('User dropdown clicked.')
    }
  }
}
</script>

<style lang="scss" scoped>
  #user-dropdown {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  #user-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .el-icon-arrow-down {
    color: $secondary-color;
    font-size: 0.8em;
  }
</style>
