<template>
  <div id="app">
    <Header @search="getQueryValue"/>
    <Main 
    :films="films"
    :tvSeries="tvSeries"
     />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';

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
      apiMoviesUrl: 'https://api.themoviedb.org/3/search/movie',
      apiTvSeriesUrl:'https://api.themoviedb.org/3/search/tv',
      searchBarText: '',
      apiKey: '1008b99ff60c44ee5c7f8f18158c204c',
    }
  },
  methods:{
    getFilms(){
      axios.get(this.apiMoviesUrl, {
        params: {
          api_key: this.apiKey,
          query: this.searchBarText,
        }
      })
      .then((result) => {
          this.films = result.data.results;
          console.log(this.films)
        })
        .catch((error) => {
          console.log(error)
        })   
    },
    getTvSeries(){
      axios.get(this.apiTvSeriesUrl, {
        params: {
          api_key: this.apiKey,
          query: this.searchBarText,
        }
      })
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
            this.getFilms();
            this.getTvSeries();
        },
  },

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
  background-color: rgb(48, 48, 48);
}
</style>

