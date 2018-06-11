<template>
  <div id="app">
     <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/Navbar'

export default {
  name: 'App',
  components: {
    navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
