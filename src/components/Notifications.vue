<template>
  <div id="notifications" @click="clicked">
    <el-badge
      is-dot
      class="notification-badge"
      :hidden="!pendingNotifications || pendingNotifications.length === 0"
    >
      <i class="el-icon-bell" />
    </el-badge>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Notifications',
  components: {},
  computed: {
    ...mapState('notifications', [
      'pendingNotifications'
    ])
  },
  async created() {
    // await this.$store.dispatch('notifications/fetchPending')
  },
  data() {
    return {

    }
  },
  methods: {
    clicked() {
      this.$message.info('Notification icon clicked.')
      this.$store.commit('notifications/dispatchNotification', 'Notification icon was clicked! ;)')
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification-badge {
    cursor: pointer;
  }

  .el-icon-bell {
    font-size: 1.4em;
    font-weight: bold;
    color: #8a8a8a;
  }
</style>
