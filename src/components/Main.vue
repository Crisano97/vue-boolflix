<template>
  <main>
    <div class="content-container" v-if="films.length || tvSeries.length">
        <h2>film :</h2>
        <div class="cards-container">
            <FilmList 
            v-for="film in films" :key="film.id"
            :film="film"
            />
            <h1 v-if="films.length === 0">no films found</h1>
        </div>
        <h2>tv serie :</h2>
        <div class="cards-container">
            <TvSeriesList 
            v-for="tvSerie in tvSeries" :key="tvSerie.id"
            :tvSerie="tvSerie"
            />
            <h1 v-if="tvSeries.length === 0">no tv series found</h1>
        </div>
    </div>
  </main>
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

<style lang="scss" scoped>
    main{
        width: 100%;
        padding: 2rem;

        div.content-container{
            width: 90%;
            margin: 0 auto;
        }

        h2{
            color: red;
            text-transform: uppercase;
        }

        div.cards-container{
            display: flex;
            flex-wrap: wrap;
        }

        h1{
            margin: 2rem 0;
            text-transform: uppercase;
            color: white;
        }
    }
    
</style>