<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title">
        <ul class="film">
            <li>Title : {{ film.title }}</li>
            <li>Original Title : {{ film.original_title }}</li>
            <li v-if="languages.includes(film.original_language)">
                <lang-flag :iso= film.original_language />
            </li>
            <li v-else>
                Language : {{ film.original_language }}
            </li>

            <li>
                Vote :
                <i class="fa-solid fa-star"
                    v-for="(vote, index) in numberFromDecimalToInteger(film.vote_average)" :key="index"
                ></i>
            </li>
        </ul>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    data:function(){
        return{
            languages: ['it', 'en', 'fr', 'de', 'zh', 'es', 'pt', 'ru'],
        }
    },
    components: {
        LangFlag,
    },
    props:[
        'film'
    ],
    methods:{
        numberFromDecimalToInteger(number){
            let integerNumber;
            integerNumber = Math.ceil(number / 2);
            console.log(integerNumber)
            return integerNumber
        },
    },
}
</script>

<style>

</style>