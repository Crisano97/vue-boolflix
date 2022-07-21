<template>
  <div id="app">
    <Header @search="getSearchText"/>
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
      apiUrl: 'https://api.themoviedb.org/3/search/movie/?api_key=1008b99ff60c44ee5c7f8f18158c204c',
      searchBarText: '',
    }
  },
  methods:{
    getFilms(){
      axios.get(`${this.apiUrl}&query=${this.searchBarText}`)
      .then((result) => {
        this.films = result.data.results;
        console.log(result.data.results)

      })
    },
    getSearchText(needle){
            this.searchBarText = needle;
            console.log(this.searchBarText)
        },
  },
  
  created(){
    this.getFilms();
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
