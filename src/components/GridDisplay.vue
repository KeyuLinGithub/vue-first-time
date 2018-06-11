<template>
  <div class="home">
    <h3>Grid</h3>
    <b-container >
    <b-col class="d-inline-block" sm="6" v-for="story of $store.state.stories">
      <b-card :title=cutText(story.title)
          :img-src=getImageSource(story)
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Author: {{story.author}}
    </p>

  </b-card>
    </b-col>
    </b-container >
  </div>
</template>

<script>
export default {
  name: 'GridDisplay',
  components: {

  },
  methods: {
    cutText(text){
      if(text.length>50){
        return text.substring(0,50)+'...'
      }
      return text
    },
    getImageSource(story){
      return "https://picsum.photos/600/300/?image=25"
      if(story.thumbnail!=="self" && story.thumbnail!=="default"){
        return story.thumbnail
      }else{
        return "https://picsum.photos/600/300/?image=25"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
