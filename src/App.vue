<script>
import AppHeader from './components/Header/AppHeader.vue'
import AppSearch from './components/main/AppSearch.vue'
import CharactersList from './components/main/Characters/CharactersList.vue'

import { store } from './store'
import axios from 'axios'

export default {
  components:{
    AppHeader,
    AppSearch,
    CharactersList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCharacters(){

      store.loading = true

      axios
      .get( store.apiUrl )
      .then( res => {
        console.log( res.data )

        // inserisco i dati dentro array
        store.CharactersList = res.data.result

        store.loading = false

      })
    }
  },
  mounted() {
    this.getCharacters()
  }
}
</script>

<template>
  <AppHeader/>
  <main class="container text-center">
    <div v-if=" (store.loading) " class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    <AppSearch/>
    <CharactersList/>
  </main>

</template>

<style lang="scss">

</style>
