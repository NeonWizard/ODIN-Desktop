<template>
  <div id="app-info" @click="clicked">
    <div id="app-content">
      <img src="@/assets/logo.png" width="35" height="35">
      <div id="app-text">
        <span id="app-name">ODIN</span>
        <span id="app-url">odin.deadtired.me</span>
      </div>
    </div>
    <i class="el-icon-arrow-down" />
  </div>
</template>

<script>
export default {
  name: 'AppInfo',
  methods: {
    clicked() {
      this.$message.info('App info was clicked.')
    }
  }
}
</script>

<style lang="scss" scoped>
  #app-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    #app-content {
      display: flex;
      align-items: center;

      img {
        margin-right: 8px;
      }
      #app-text {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        margin-right: 24px;

        #app-url {
          color: $secondary-color;
        }
      }
    }

    .el-icon-arrow-down {
      color: $secondary-color;
      font-size: 0.8em;
    }
  }
</style>
