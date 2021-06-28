<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2>Login</h2>
      <el-form
        ref="form"
        class="login-form"
        :model="model"
        :rules="rules"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            class="login-input"
            placeholder="Username"
            prefix-icon="el-icon-s-custom"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            class="login-input"
            placeholder="Password"
            prefix-icon="el-icon-lock"
            show-password
          />
        </el-form-item>

        <el-form-item>
          <el-button
            class="login-submit"
            :loading="loading"
            type="primary"
            native-type="submit"
          >
            SIGN IN
          </el-button>
        </el-form-item>

        <el-link
          type="primary"
          class="forgot-password"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          Forgot password?
        </el-link>
      </el-form>
    </el-card>

    <footer>
      <div class="footer-title">
        ODIN Desktop
      </div>
      <div class="footer-version">
        Version {{ appVersion }}
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
  },
  data() {
    return {
      appVersion: process.env.VUE_APP_VERSION,
      loading: false,
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: "Username is required", trigger: "blur" }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
        ]
      }
    }
  },
  methods: {
    async login() {
      const valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }

      this.loading = true

      await new Promise(resolve => { setTimeout(resolve, 300) }) // eye candy
      const error = await this.$store.dispatch('auth/login', {
        username: this.model.username,
        password: this.model.password
      })

      if (error) {
        this.$message.error(error)
      } else {
        if (this.$route.query?.redirect) {
          this.$router.push({ path: this.$route.query.redirect })
        } else {
          this.$router.push({ name: 'Home' })
        }
      }

      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }

  .login-card {
    padding: 20px 8px 24px 8px;
  }

  h2 {
    margin-bottom: 35px;
    font-size: 2em;
  }

  .login-form {
    width: 290px;

    .login-submit {
      width: 100%;
      margin-top: 25px;
    }

    .forgot-password {
      margin-top: 2px;
    }
  }

  footer {
    position: absolute;
    bottom: 0px;

    padding: 20px;
    color: #d0d4d8;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer-title {
      font-size: 1.1em;
    }

    .footer-version {
      padding: 0 8px;
      color: #8f9398;
      font-size: 0.8em;
      margin-top: 3px;
    }
  }
</style>
