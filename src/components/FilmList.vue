<template>
    <div class="film-card-container">
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title">
        
        <div class="info-container">
            <ul class="film">
                <li><b>Title :</b> {{ film.title }}</li>
                <li><b>Original Title :</b> {{ film.original_title }}</li>
                <li v-if="languages.includes(film.original_language)">
                    <b>Language :</b> <lang-flag :iso= film.original_language />
                </li>
                <li v-else>
                    <b>Language :</b> {{ film.original_language }}
                </li>

                <li>
                    <b>Vote :</b>
                    <i class="fa-solid fa-star"
                        v-for="(vote, index) in numberFromDecimalToInteger(film.vote_average)" :key="index"
                    ></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    data:function(){
        return{
            languages: ['it', 'en', 'fr', 'de', 'zh', 'es', 'pt', 'ru', 'ja', 'ko'],
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

<style lang="scss">

    div.film-card-container{
        margin: 1rem .2rem;
        height: 30.4rem;
        width: 20.2rem;
        position: relative;
        line-height: 30rem;
        background-color: gray;
        color: white;
        border: 3px solid white;
        &:hover div.info-container{
            display: block;
            line-height: initial;
        }
        img{
            height: 100%;
            width: 100%;
        }

        div.info-container{
            position: absolute;
            top: 0;
            display: none;
            width: 100%;
            height: 100%;
            background-color: black;
            border: 3px solid white;
            padding: 1rem;
        }
    }
    ul.film{
        color: white;
        list-style: none;
        margin-top: 2rem;
        text-align: start;
        
        li{
            margin-bottom: .2rem;
        }
        
        li i{
            color: yellow;
        }
    }
</style>