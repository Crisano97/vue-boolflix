<template>
  <header>
    <h1>Boolflix</h1>
    <div>
      <input class="search-bar" v-model="inputText" type="text" placeholder="Search Films" @keyup.enter="$emit('search', inputText)" >
      <!-- <button  type="submit" @click.prevent="$emit('search', inputText)">search</button> -->
    </div>
  </header>
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

<style lang="scss">
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: black;
      padding: 2rem;

      h1{
        color: red;
        text-transform: uppercase;
      }

      .search-bar{
        padding: .3rem;
      }

      button{

      }

    }
</style>