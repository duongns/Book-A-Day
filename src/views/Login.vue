<template>
  <el-container>
    <el-row>
      <el-col>
        <el-form  action='#' @submit.prevent='submit' auto-complete="on">
          <el-form-item>
            <el-alert type="error" v-if="error">{{ error }}</el-alert>
          </el-form-item>
          <el-form-item prop="email">
            <el-input id="email" type="email" name="email" placeholder="Email" prefix-icon="el-icon-user" value required autofocus v-model="form.email" autosize />
          </el-form-item>
          <el-form-item prop="pass">
            <el-input id="password" :type="passwordType" name="password" placeholder="Password" prefix-icon="el-icon-lock" value required autofocus v-model="form.password" autosize >
              <el-button slot="append" icon="el-icon-view" @click="showPassword()"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit()">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null,
      passwordType: 'password'
    }
  },
  methods: {
    submit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: 'Dashboard' })
        })
        .catch(err => {
          this.error = err.message
        })
    },
    showPassword () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    }
  }
}
</script>
