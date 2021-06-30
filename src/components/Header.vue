<template>
  <div id="header">
    <AppInfo class="app-info" />
    <el-row id="header-row" type="flex">
      <!-- Center -->
      <el-col id="link-nav" :span="20">
        <div class="grid-content">
          <el-link class="link-nav-link" href="/" type="info">
            Home
          </el-link>
          <el-link class="link-nav-link" href="/" type="info">
            Settings
          </el-link>
          <el-link class="link-nav-link" href="/" type="info">
            Help
          </el-link>
        </div>
      </el-col>

      <!-- Right Side -->
      <el-col id="right-side" :span="4">
        <div class="grid-content">
          <Notifications />
          <UserDropdown />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AppInfo from '@/components/AppInfo.vue'
import Notifications from '@/components/Notifications.vue'
import UserDropdown from '@/components/UserDropdown.vue'

export default {
  name: 'Header',
  components: {
    AppInfo,
    Notifications,
    UserDropdown
  }
}
</script>

<style lang="scss" scoped>
  #header {
    display: flex;
    align-items: center;
    background-color: #1c1d1e;
    border-radius: 20px 20px 0 0;
    padding: 18px 20px;
  }

  .app-info {
    padding-right: 25px;
    border-right: 2px solid #333;
  }

  #header-row {
    flex: 1;

    .grid-content {
      display: flex;
      align-items: center;
      height: 100%;
    }

    #link-nav {
      margin-left: 25px;

      .link-nav-link {
        margin-right: 50px;
        font-weight: bold;
        font-size: 1.1em;
      }
    }

    #right-side {
      .grid-content {
        display: flex;
        justify-content: flex-end;

        ::v-deep #notifications {
          margin-right: 30px;
        }
      }
    }
  }
</style>
