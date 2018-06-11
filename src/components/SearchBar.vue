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
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.query = ''
      this.form.type = 'relevance'
    }
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
