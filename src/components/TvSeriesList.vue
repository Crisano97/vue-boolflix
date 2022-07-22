<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + tvSerie.poster_path" :alt="tvSerie.name">
        <ul>
            <li>Title : {{ tvSerie.name }}</li>
            <li>Original Title : {{ tvSerie.original_name }}</li>
            <li>
                <lang-flag :iso= tvSerie.original_language />
            </li>
            <li>
                Vote : 
                <i class="fa-solid fa-star"
                    v-for="(vote, index) in numberFromDecimalToInteger(tvSerie.vote_average)" :key="index"
                ></i>
            </li>
        </ul>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    data: function(){
        return{
            posterUrl: 'https://image.tmdb.org/t/p/w342',
        }
    },
    components: {
        LangFlag,
    },
    props:[
        'tvSerie'
    ],
    methods:{
        numberFromDecimalToInteger(number){
            let integerNumber; 
            integerNumber = Math.round(number / 2);
            return integerNumber
        }
    },
}
</script>

<style>

</style>