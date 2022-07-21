<template>
  <div>
    <input v-model="inputText" type="text" placeholder="Search Films">
    <button  type="submit" @click.prevent="$emit('search', inputText)">search</button>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            inputText: '',
        }      
    },
    methods: {
            log(string){
                console.log(string)
            },
        }
}
</script>

<style>

</style>