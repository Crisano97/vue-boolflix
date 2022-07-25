<template>
  <main>
    <div class="content-container" v-if="films.length">
        <h2>film :</h2>
        <div class="cards-container">
            <FilmList 
            v-for="film in films" :key="film.id"
            :film="film"
            />
        </div>
        <h2>serie tv :</h2>
        <div class="cards-container">
            <TvSeriesList 
            v-for="tvSerie in tvSeries" :key="tvSerie.id"
            :tvSerie="tvSerie"
            />
        </div>
    </div>
    <h1 v-if="films.length == 0 && tvSeries.length == 0">La tua ricerca non ha prodotto risultati</h1>
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
    }
    
</style>