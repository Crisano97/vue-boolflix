<template>

    <ul>
        <li>Title : {{ title }}</li>
        <li>Original Title : {{ originalTitle }}</li>
        <li>
            <lang-flag :iso= originalLanguage />
        </li>
        <li>Vote : {{ vote }}</li>

    </ul>
  
</template>

<script>
import LangFlag from 'vue-lang-code-flags'

export default {
    components: {
        LangFlag,
    },
    props: {
        'title': String,
        'originalTitle': String,
        'originalLanguage': String,
        'vote': [String, Number],
    }
}
</script>

<style lang="scss" scoped>
    main{
        // height: 97vh;
        width: 100%;
        background-color: antiquewhite;
    }
    ul{
        border: 1px solid black;
        margin: 2rem 15rem;
    }
</style>