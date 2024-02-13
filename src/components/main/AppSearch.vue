<template>
  <div class="d-flex align-items-end gap-4">
    <div class="text-start w-20 py-3">
      <label for="character" class="form-label">Ricerca Personaggi</label>
      <input
        type="text"
        class="form-control"
        name="character"
        id="character"
        placeholder="Scrivi nome personaggio"
        v-model="store.selectValue">

      />
    </div>
      <div class="py-3">

        <select class="form-select form-select-lg" 
        name="" 
        id=""
        v-model="store.selectValue">
        <option selected value="all">All</option>
        <option
            :value="element.archetype_name"
            v-for="(element, index) in store.ArrayArchetype"
            :key="index"
          >
            {{ element.archetype_name }}
          </option>
        </select>
        
      </div>
    <div class="">
      <button class="btn btn-primary"
      @click.prevent="$emit('performSearch')">Cerca</button>
    </div>
  </div>
</template>

<script>
import { store } from '../../store';

export default {
  name: 'AppSearch',
  data() {
    return {
      store
    };
  }
};
</script>

<style lang="scss" scoped>

</style>