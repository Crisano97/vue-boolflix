<template>
  <div id="app">
    <Header @search="getQueryValue"/>
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data:function(){
    return{
      films: [],
      foundedFilms: [],
      apiUrl: '',
      searchBarText: '',
    }
  },
  methods:{
    getFilms(){
      axios.get(this.apiUrl)
      .then((result) => {
        this.films = result.data.results;
        console.log(this.films)
        // console.log(result.data.results)

      })
    },
    getQueryValue(needle){
            this.searchBarText = needle;
            this.apiUrl = `${'https://api.themoviedb.org/3/search/movie/?api_key=1008b99ff60c44ee5c7f8f18158c204c'}&query=${this.searchBarText}`
            // console.log(this.apiUrl)
            // console.log(this.searchBarText)
            this.getFilms()
            // console.log(this.films)
        },
  },

  created(){
    this.getQueryValue();
  }

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
