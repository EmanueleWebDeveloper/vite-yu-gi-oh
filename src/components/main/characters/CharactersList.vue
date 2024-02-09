<template>
    <div class="row">
        <characterCard v-for="(element, index) in store.CharactersList"
        :key="index"/>
    </div>
</template>

<script>
import characterCard from './CharacterCard.vue'
import { store } from '../../../store.js'

    export default {
        name:"CharactersList",
        components: {
            characterCard
        },
        data () {

            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>