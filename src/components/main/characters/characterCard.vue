<template> 

        <div class="col-3" >
            <div class="border border-black colore">
                <figure class="figure">
                    <img class="img-fluid rounded custom-image" width="230" height="250" :src="propsElement.card_images[0].image_url_small" alt="">
                </figure> 
                <h3>{{ propsElement.name }}</h3>
                <h5>{{ propsElement.frameType }}</h5>
            </div>
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

div{
    background-color: white;
    padding: 30px;
    .colore{
        background-color: #d48f38;
;
    }
}
.colore{
    height: 500px; 
    max-width: 370px;
}
img{
    cursor: pointer;

}

</style>