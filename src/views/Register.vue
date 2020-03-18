<template>
  <el-container>
    <el-form action="#" @submit.prevent="submit" auto-complete="on">
      <el-form-item>
        <el-alert type="error" v-if="error">{{ error }}</el-alert>
      </el-form-item>
      <el-form-item>
        <el-input id="name" type="name" name="name" prefix-icon="el-icon-user" placeholder="Full Name" value required autofocus v-model="form.name" auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input id="email" type="email" name="email" prefix-icon="el-icon-message" placeholder="Email" value required autofocus v-model="form.email" auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input id="password" :type="passwordType" name="password" prefix-icon="el-icon-lock" placeholder="Password" value required autofocus v-model="form.password">
          <el-button slot="append" icon="el-icon-view" @click="showPassword()"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit()">Register</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      form: {
        name: '',
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {})
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
