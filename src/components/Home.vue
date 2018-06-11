<template>
  <div class="home">
    <h1>Home Page</h1>
    <b-container>
      <SearchBar></SearchBar>
    </b-container>

  </div>
</template>

<script>
import SearchBar from './SearchBar'
export default {
  name: 'Home',
  components: {
      SearchBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
