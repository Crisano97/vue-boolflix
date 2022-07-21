<template>
    <ul class="film">
        <li>Title : {{ film.title }}</li>
        <li>Original Title : {{ film.original_title }}</li>
        <li>
            <lang-flag :iso= film.original_language />
        </li>
        <li>Vote : {{ film.vote_average }}</li>

    </ul>
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