<template>
  <div>
    <h1>Boolflix</h1>
    <input v-model="inputText" type="text" placeholder="Search Films">
    <button  type="submit" @click.prevent="$emit('search', inputText)">search</button>
  </div>
</template>

<script>

export default {
    
    data: function(){
        return{
            inputText: '',
        }
    },
    methods:{
        
        
    },
    
}
</script>

<style>

</style>