<template>
    <div class="medium-article">
        <nuxt-link :to="'/level2/' + id">
            <div class="medium-article__img">
                <img :src="ImgSrc">
            </div>
            <div class="medium-article__title">{{title}}</div>
            <div class="medium-article__description">{{indent}}</div>
            <div class="medium-article__description">{{date}}</div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ["ImgSrc", "title", "indent", "date", "id"],
    
}
</script>

<style>

</style>

