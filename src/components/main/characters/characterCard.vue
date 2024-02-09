<template>
    <div class="col-4">
        <figure>
            <img :src="propsElement.card_images[0].image_url_small" alt="">
        </figure>
        
    </div>
</template>

<script>
export default {
    name: "characterCard",
    props: [
        'propsElement'
    ],
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>