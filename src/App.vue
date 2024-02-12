<script>
import AppHeader from './components/Header/AppHeader.vue'
import AppSearch from './components/main/AppSearch.vue'
import CharactersList from './components/main/Characters/CharactersList.vue'

import { store } from './store'
import axios from 'axios'

export default {
  components: {
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
    getCharacters() {
      store.loading = true

      axios
        .get(store.apiUrl)
        .then(res => {
          console.log(res.data)

          // Inserisco i dati dentro l'array
          store.CharactersList = res.data.data

          store.loading = false
        })
    },
    getArchetypes() {
      axios
        .get(store.apiUrlArchetypes)
        .then(res => {
          console.log(res.data)

          // Inserisco i dati dentro l'array
          store.Archetypes = res.data
        })
    }
  },
  mounted() {
    this.getCharacters()
    this.getArchetypes()
  }
}
</script>

<template>
  <AppHeader/>
  <main class="container text-center">
    <div v-if="store.loading" class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <AppSearch/>
    <CharactersList/>
  </main>
</template>

<style lang="scss">
* {
  background-color: #d48f38;
}
</style>