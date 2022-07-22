<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + tvSerie.poster_path" :alt="tvSerie.name">
        <ul>
            <li>Title : {{ tvSerie.name }}</li>
            <li>Original Title : {{ tvSerie.original_name }}</li>
            <li>
                <lang-flag :iso= tvSerie.original_language />
            </li>
            <li>Vote : {{ numberFromDecimalToInteger(tvSerie.vote_average) }}</li>

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
            integerNumber = Math.round(number / 2) + 1;
            console.warn(integerNumber)
            return integerNumber
        }
    },
}
</script>

<style>

</style>