<template>
  <div class="home">
    <h3>What's in your mind?</h3>
    <b-container>
      <SearchBar></SearchBar>
      <GridDisplay></GridDisplay>
    </b-container>

  </div>
</template>

<script>
import SearchBar from './SearchBar'
import GridDisplay from './GridDisplay'
export default {
  name: 'Home',
  components: {
    SearchBar,
    GridDisplay
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
