<template>
  <el-container>
    <!-- <h1>Hello {{user.data.displayName}}</h1> -->
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user' // map `this.user` to `this.$store.getters.user`
    })
  }
}
</script>
