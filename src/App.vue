<template>
  <div id="app">
    <el-container style="height: 100%; width: 100%;">
      <Header/>
      <router-view/>

      <el-footer style="text-align: center; background-color: #545c64; color: #fff">
        <h4>(c) copyright.</h4>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
