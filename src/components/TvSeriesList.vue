<template>
    <ul>
        <li>Title : {{ tvSerie.name }}</li>
        <li>Original Title : {{ tvSerie.original_name }}</li>
        <li>
            <lang-flag :iso= tvSerie.original_language />
        </li>
        <li>Vote : {{ tvSerie.vote_average }}</li>

    </ul>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        LangFlag,
    },
    props:[
        'tvSerie'
    ]
}
</script>

<style>

</style>