<template>
  <div id="generation-configuration">
    <el-form
      ref="form"
      :model="form"
      label-position="right"
      label-width="100px"
      status-icon
      :rules="rules"
    >
      <el-form-item label="Length">
        <el-input-number
          v-model="form.length"
          size="mini"
          :min="1"
          :max="16384"
        />
      </el-form-item>
      <el-form-item label="Truncate">
        <el-input
          v-model="form.truncate"
          size="mini"
        />
      </el-form-item>
      <el-form-item label="Seed">
        <el-input
          v-model.number="form.seed"
          type="text"
          size="mini"
        />
      </el-form-item>
      <el-form-item label="Temperature">
        <el-input-number
          v-model="form.temperature"
          size="mini"
          :precision="2"
          :step="0.1"
          :min="0"
          :max="1"
        />
      </el-form-item>
      <el-form-item label="Top K">
        <el-input-number
          v-model="form.top_k"
          size="mini"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="Top P">
        <el-input-number
          v-model="form.top_p"
          size="mini"
          :precision="2"
          :step="0.1"
          :min="0"
          :max="1"
        />
      </el-form-item>
      <el-form-item label="Include prefix">
        <el-switch
          v-model="form.include_prefix"
          size="mini"
        />
      </el-form-item>
      <el-form-item label="N samples">
        <el-input-number
          v-model="form.n_samples"
          size="mini"
          :min="1"
          :max="8"
          :disabled="!!form.seed"
        />
      </el-form-item>
      <el-form-item label="Batch size" prop="batch_size">
        <el-input-number
          v-model="form.batch_size"
          size="mini"
          :min="1"
          :max="8"
        />
      </el-form-item>
      <el-form-item>
        <el-popconfirm
          title="Are you sure? Generation may take several minutes."
          confirm-button-text="OK"
          icon-color="red"
          @confirm="submitForm"
        >
          <el-button
            slot="reference"
            type="primary"
            :disabled="disabled"
          >
            Generate
          </el-button>
        </el-popconfirm>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'GenerationConfiguration',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      form: {
        length: 32,
        truncate: null,
        seed: null,
        temperature: 0.7,
        top_k: 0,
        top_p: 0.0,
        include_prefix: true,
        n_samples: 1,
        batch_size: 1
      },
      rules: {
        batch_size: [{
          validator: (rule, val, cb) => {
            if (this.form.n_samples % val !== 0) {
              cb(new Error('Batch size must be able to divide n_samples'))
            } else {
              cb()
            }
          },
          trigger: 'change'
        }]
      }
    }
  },
  watch: {
    'form.seed': function(val) {
      if (val) {
        this.form.n_samples = 1
      } else if (val === '') {
        this.form.seed = null
      }
    },
    'form.truncate': function(val) {
      if (val === '') {
        this.form.truncate = null
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
          return true
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form {
  display: flex;
  flex-wrap: wrap;
}

::v-deep .el-form-item {
  max-width: 50%;
}
</style>