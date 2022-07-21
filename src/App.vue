<template>
  <div id="app">
    <Header />
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
      apiUrl: 'https://api.themoviedb.org/3/search/movie/?api_key=1008b99ff60c44ee5c7f8f18158c204c&query=',
      searchText: '',
    }
  },
  methods:{
    // getFilms(){
    //   axios.get(`${apiUrl}&query=${searchText}`)
    //   .then((result) => {
    //     this.films= result.results
    //   })
    // }
  },
  // created:{

  // }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
