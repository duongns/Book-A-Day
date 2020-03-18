<template>
    <el-header class="header" height="50px">
      <div class="toggle-navbar" @click="toggleClick">
        <svg class="hamburger" :class="{'is-active':isActive}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
        </svg>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="user-corner">
        <span class="user-fullname">{{ user.data.displayName }}</span>
        <el-dropdown trigger="click">
          <i class='el-icon-more' style='margin-right: 15px'></i>
          <el-dropdown-menu slot='dropdown'>
            <el-dropdown-item @click.native="signOut">Sign Out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters(
      {
        user: 'user'
      }
    )
  },
  methods: {
    toggleClick () {
      this.$emit('toggleClick', this.value = !this.value)
    },
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'Login'
          })
        })
    }
  }
}
</script>

<style>
  .header {
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }
  .hamburger {
    display: block;
    cursor: pointer;
    margin-right: 15px;
  }
  .hamburger.is-active {
    transform: rotate(180deg);
  }
  .user-corner {
    margin-left: auto;
  }
  .user-fullname {
    margin-right: 20px;
  }
</style>
