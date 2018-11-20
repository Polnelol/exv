<template>
    <nuxt-link :to="'/trading/' + id">
        <div class="medium-article__img">
            <img v-if="ImgSrc" :src="ImgSrc" :key="ImgSrc">
            <img v-else :key="ImgSrc">
        </div>
        <div class="medium-article__title">{{title}}</div>
        <div class="medium-article__description">{{indent}}</div>
        <div class="medium-article__description">{{date}}</div>
    </nuxt-link>
</template>

<script>
export default {
    props: ["ImgSrc", "title", "indent", "date", "id"],
    
}
</script>

<style>

</style>

