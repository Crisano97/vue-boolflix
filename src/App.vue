<template>
  <div id="app">
    <Header @search="getQueryValue"/>
    <Main 
    v-for="film in films" :key="film.id"
    :title="film.title"
    :originalTitle="film.original_title"
    :originalLanguage="film.original_language"
    :vote="film.vote_average"
    />
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
      tvSeries: [],
      foundedFilms: [],
      apiMoviesUrl: ' ',
      apiTvSeriesUrl:'',
      searchBarText: '',
    }
  },
  methods:{
    getFilms(){
      axios.get(this.apiMoviesUrl)
      .then((result) => {
        this.films = result.data.results;
        console.log(this.films)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getTvSeries(){
      axios.get(this.apiTvSeriesUrl)
      .then((result) => {
        this.tvSeries = result.data.results;
        console.log(this.tvSeries)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getQueryValue(needle){
            this.searchBarText = needle;
            this.apiMoviesUrl = `${'https://api.themoviedb.org/3/search/movie/?api_key=1008b99ff60c44ee5c7f8f18158c204c'}&query=${this.searchBarText}`
            this.apiTvSeriesUrl = `${'https://api.themoviedb.org/3/search/movie/?api_key=1008b99ff60c44ee5c7f8f18158c204c'}&query=${this.searchBarText}`
            this.getFilms();
            this.getTvSeries();
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
body{
  text-align: center;
}
</style>
