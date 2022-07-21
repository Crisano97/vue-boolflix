<template>
  <div>
    <Searchbar @search="getSearchText"/>
  </div>
</template>

<script>

import Searchbar from './SearchBar.vue';

export default {
    components:{
        Searchbar,
    },
    data: function(){
        return{
            SearchbarText: '',
        }
    },
    methods:{
        getSearchText(needle){
            this.SearchbarText = needle;
            console.log(this.SearchbarText)
        }
    },
    
}
</script>

<style>

</style>