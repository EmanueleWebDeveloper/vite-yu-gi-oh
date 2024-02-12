<template>
<div class="d-flex align-items-end gap-4">
        <div class="text-start w-20  py-3">
            <label for="character" class="form-label">Ricerca Personaggi</label>
            <input
                type="text"
                class="form-control"
                name="character"
                id="character"
                placeholder="Scrivi nome personaggio"
                
            />
        </div>
        <div>
            <div class=" py-3">
                <label for="" class="form-label ">Status</label>
                <select
                    class="form-select form-select-lg "
                    name=""
                    id=""
                >
                    <option value="" v-for="(element, index) in store.ArrayArchetypes" :key="index">{{ element.archetype_name }}</option>
                </select>
            </div>
            
        </div>
        <div class="">
            <button
                class="btn btn-primary "
                            >Cerca</button>
        </div>
    </div>
</template>

<script>
import { store } from '../../store';
    export default {
        name:"AppSearch",
        data () {

            return{}
        }
    }
</script>

<style lang="scss" scoped>

</style>