<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title">
        <ul class="film">
            <li>Title : {{ film.title }}</li>
            <li>Original Title : {{ film.original_title }}</li>
            <li>
                <lang-flag :iso= film.original_language />
            </li>
            <li>Vote : {{ film.vote_average }}</li>

        </ul>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        LangFlag,
    },
    props:[
        'film'
    ]
}
</script>

<style>

</style>