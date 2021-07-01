<template>
  <el-row>
    <el-col id="sidebar" :span="5">
      <el-card class="box-card" />
    </el-col>
    <el-col id="main-body" :span="19">
      <el-row id="input-zone">
        <el-col id="configuration-zone" :span="18">
          <el-card class="box-card" />
        </el-col>
        <el-col id="misc-zone" :span="6">
          <el-card class="box-card" />
        </el-col>
      </el-row>
      <el-row id="output-zone">
        <el-col id="output-box" :span="24">
          <el-card class="box-card" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
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
  #sidebar {
    height: 100%;
    padding-right: 11px;
  }

  #main-body {
    height: 100%;
    padding-left: 11px;

    #input-zone {
      height: 35%;

      #configuration-zone {
        height: 100%;
        padding-right: 11px;
      }

      #misc-zone {
        height: 100%;
        padding-left: 11px;
      }
    }

    #output-zone {
      padding-top: 22px;
      height: 65%;

      #output-box {
        height: 100%;
      }
    }
  }

  ::v-deep .el-card {
    border-radius: 10px;
    background-color: $primary-background;
    border: none;
    height: 100%;
  }
</style>
