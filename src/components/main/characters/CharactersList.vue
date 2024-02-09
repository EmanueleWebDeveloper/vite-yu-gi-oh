<template>
    <div class="row">
        <characterCard/>
    </div>
</template>

<script>
import characterCard from './characterCard.vue';

    export default {
        name:"CharactersList",
        components: {
            characterCard
        },
        data () {

            return{}
        }
    }
</script>

<style lang="scss" scoped>

</style>