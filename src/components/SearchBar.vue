<template>
  <div class="Search">
     <b-col sm="6"  offset-md="3">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="searchQuery" label="Content?" label-for="theQuery">
          <b-form-input v-model="form.query" type="text" placeholder="What's in your mind?"></b-form-input>
        </b-form-group>
        <b-form-group id="searchType" label="Type:" label-for="theType">
          <b-form-radio-group id="theType" v-model="form.type" name="radioSubComponent">
            <b-form-radio value="relevance" >Relevance</b-form-radio>
            <b-form-radio value="hot">Hot</b-form-radio>
            <b-form-radio value="Top">Top</b-form-radio>
            <b-form-radio value="New">New</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-button type="submit" variant="info">Submit</b-button>
        <b-button type="reset" variant="primary">Reset</b-button>
      </b-form>
   </b-col >
  </div>
</template>

<script>
export default {

  name: 'SearchBar',
  data () {
    return {
      form: {
        query: '',
        type: 'relevance'
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log(this.form.query)
      console.log(this.form.type)
      fetch(`http://www.reddit.com/search.json?q=${this.form.query}&sort=${this.form.type}`)
      .then(res => res.json())
      .then(data => {
       console.log("ccc")
        console.log(data)
        console.log("ddd")
        console.log(data.data.children.map(data => data.data))
        this.$store.state.stories=data.data.children.map(data => data.data)
      })
      .catch(err => console.log(err))
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.query = ''
      this.form.type = 'relevance'
      console.log('woops')
      console.log(this.$store.state.stories)
      console.log(this.$store.state.stories[0])
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
