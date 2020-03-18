<template>
  <el-container>
    <navbar :isCollapse="isCollapse"/>
    <el-main class="main-wrapper">
      <Header @toggleClick="isCollapse = $event"/>
        <router-view></router-view>
      <Footer/>
    </el-main>
  </el-container>
</template>

<script>
import Header from './components/Header'
import navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    navbar,
    Footer
  },
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>

<style>
  .main-wrapper {
    padding: 0;
  }
</style>
