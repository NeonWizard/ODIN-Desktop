<template>
  <div id="generation-configuration">
    <el-form
      :model="form"
      label-position="right"
      label-width="100px"
      status-icon
      :rules="rules"
    >
      <el-form-item label="Length">
        <el-input-number
          v-model="form.length"
          size="small"
          :min="1"
          :max="16384"
        />
      </el-form-item>
      <el-form-item label="Truncate">
        <el-input
          v-model="form.truncate"
          size="small"
        />
      </el-form-item>
      <el-form-item label="Prefix">
        <el-input
          v-model="form.prefix"
          size="small"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="Seed">
        <el-input-number
          v-model="form.seed"
          size="small"
          :min="0"
          :max="4294967295"
        />
      </el-form-item>
      <el-form-item label="Temperature">
        <el-input-number
          v-model="form.temperature"
          size="small"
          :precision="2"
          :step="0.1"
          :min="0"
          :max="1"
        />
      </el-form-item>
      <el-form-item label="Top K">
        <el-input-number
          v-model="form.top_k"
          size="small"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="Top P">
        <el-input-number
          v-model="form.top_p"
          size="small"
          :precision="2"
          :step="0.1"
          :min="0"
          :max="1"
        />
      </el-form-item>
      <el-form-item label="Include prefix">
        <el-switch
          v-model="form.include_prefix"
          size="small"
        />
      </el-form-item>
      <el-form-item label="N samples">
        <el-input-number
          v-model="form.n_samples"
          size="small"
          :min="1"
          :max="8"
        />
      </el-form-item>
      <el-form-item label="Batch size">
        <el-input-number
          v-model="form.batch_size"
          size="small"
          :min="1"
          :max="8"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'GenerationConfiguration',
  data() {
    return {
      form: {
        length: 32,
        truncate: '',
        prefix: '',
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
              cb(new Error('Batch size must be able to divide n_samples.'))
            } else {
              cb()
            }
          },
          trigger: 'blur'
        }],
        n_samples: [{
          validator: (rule, val, cb) => {
            if (this.form.seed !== null) {
              cb(new Error('Only one sample may be generated if the seed property is set.'))
            } else {
              cb()
            }
          }
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>