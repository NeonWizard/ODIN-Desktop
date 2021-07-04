<template>
  <el-row v-if="models && models.length > 0">
    <el-col id="sidebar" :span="5">
      <el-card class="box-card">
        <ModelListNavbar
          :activeModel.sync="activeModel"
          :models="models"
        />
      </el-card>
    </el-col>
    <el-col id="main-body" :span="19">
      <el-row id="input-zone">
        <el-col id="configuration-zone" :span="18">
          <el-card class="box-card">
            <GenerationConfiguration @submit="generate" />
          </el-card>
        </el-col>
        <el-col id="misc-zone" :span="6">
          <el-card class="box-card">
            <el-input
              id="prefix-input"
              v-model="prefix"
              type="textarea"
            />
          </el-card>
        </el-col>
      </el-row>
      <el-row id="output-zone">
        <el-col id="output-box" :span="24">
          <el-card class="box-card" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <div v-else>
    We're sorry, the ODIN backend doesn't currently have any available models.
  </div>
</template>

<script>
import ModelListNavbar from '@/components/ModelListNavbar.vue'
import GenerationConfiguration from '@/components/GenerationConfiguration.vue'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ModelListNavbar,
    GenerationConfiguration
  },
  data() {
    return {
      activeModel: '',
      form: {},
      prefix: '',
    }
  },
  computed: {
    ...mapState('models', [
      'models'
    ])
  },
  async created() {
    await this.$store.dispatch('models/fetchModels')

    this.activeModel = this.models[0]?.name
  },
  methods: {
    async generate(form) {
      form.prefix = this.prefix

      const res = await this.$store.dispatch('models/generate', this.activeModel, form)
      console.log(res.data)
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
      height: 40%;

      #configuration-zone {
        height: 100%;
        padding-right: 11px;
      }

      #misc-zone {
        height: 100%;
        padding-left: 11px;

        ::v-deep #prefix-input {
          height: 100%;
        }
      }
    }

    #output-zone {
      padding-top: 22px;
      height: 60%;

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
