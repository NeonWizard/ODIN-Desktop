<template>
  <el-dropdown
    id="user-dropdown"
    trigger="click"
    @command="handleCommand"
  >
    <div>
      <img id="user-image" src="https://avatars.githubusercontent.com/u/1355586?s=32">
      <i class="el-icon-arrow-down" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="settings">
        Settings
      </el-dropdown-item>
      <el-dropdown-item command="logout">
        Logout
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'UserDropdown',
  components: {},
  methods: {
    async handleCommand(command) {
      switch (command) {
        case 'settings':
          this.$router.push('/settings')
          break
        case 'logout':
          this.$store.dispatch('auth/logout')
          await new Promise(resolve => { setTimeout(resolve, 300) }) // eye candy
          this.$router.push('/login')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #user-dropdown > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  #user-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .el-icon-arrow-down {
    color: $secondary-color;
    font-size: 0.8em;
  }
</style>
