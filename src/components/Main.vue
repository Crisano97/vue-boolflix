<template>

    <ul>
        <li>Title : {{ title }}</li>
        <li>Original Title : {{ originalTitle }}</li>
        <li>Language : {{ originalLanguage }}</li>
        <li>Vote : {{ vote }}</li>

    </ul>
  
</template>

<script>
export default {
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
</style>