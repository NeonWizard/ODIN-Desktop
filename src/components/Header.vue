<template>
  <div id="header" :class="{ 'header-rounded': !isElectron }">
    <AppInfo class="app-info" />
    <el-row id="header-row" type="flex">
      <!-- Center -->
      <el-col id="link-nav" :span="20">
        <div class="grid-content">
          <a
            class="link-nav-link"
            :class="{ 'link-nav-link-selected': $route.path === '/home' }"
            @click="$router.push('/home')"
          >
            Home
          </a>
          <a
            class="link-nav-link"
            :class="{ 'link-nav-link-selected': $route.path === '/models' }"
            @click="$router.push('/models')"
          >
            Models
          </a>
          <a
            class="link-nav-link"
            :class="{ 'link-nav-link-selected': $route.path === '/settings' }"
            @click="$router.push('/settings')"
          >
            Settings
          </a>
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

import { mapState } from 'vuex'

export default {
  name: 'Header',
  components: {
    AppInfo,
    Notifications,
    UserDropdown
  },
  computed: {
    ...mapState('common', [
      'isElectron'
    ])
  }
}
</script>

<style lang="scss" scoped>
  #header {
    display: flex;
    align-items: center;
    background-color: $primary-background;
    padding: 18px 30px;
  }
  .header-rounded {
    border-radius: 20px 20px 0 0;
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
      margin-left: 40px;

      .link-nav-link {
        margin-right: 50px;
        font-weight: bold;
        font-size: 1.15em;
        cursor: pointer;
        color: $secondary-color;
      }
      .link-nav-link-selected {
        color: $primary-color;
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
