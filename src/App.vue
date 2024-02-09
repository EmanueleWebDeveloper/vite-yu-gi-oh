<script>
import AppHeader from './components/Header/AppHeader.vue'
import AppSearch from './components/main/AppSearch.vue'
import CharactersList from './components/main/CharactersList.vue'


export default {
  components:{
    AppHeader,
    AppSearch,
    CharactersList
  }
  
}
</script>

<template>
  <AppHeader/>
  <main>
    <AppSearch/>
    <CharactersList/>
  </main>

</template>

<style lang="scss">

</style>
