<template>
  <div>
    <div>
        <h2>film</h2>
        <FilmList 
        v-for="film in films" :key="film.id"
        :film="film"
        />
    </div>
    <div>
        <h2>serietv</h2>
        <TvSeriesList 
        v-for="tvSerie in tvSeries" :key="tvSerie.id"
        :tvSerie="tvSerie"
        />
    </div>
  </div>
</template>

<script>
import FilmList from './FilmList.vue';
import TvSeriesList from './TvSeriesList.vue';

export default {
    components: {
        FilmList,
        TvSeriesList,
    },
    props:{
        'films' : {
            required: true,
            type: Array
        },
        'tvSeries' : {
            required: true,
            type: Array
        }
    }
}
</script>

<style lang="scss" >
    main{
        width: 100%;
        background-color: antiquewhite;
    }
    ul{
        border: 1px solid black;
        margin: 2rem;
    }
</style>