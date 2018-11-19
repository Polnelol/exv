<template>
    <div class="medium-article">
        <nuxt-link :to="'/crypto/' + id">
            <div class="medium-article__img">
                <img :src="ImgSrc">
            </div>
            <div class="medium-article__title">{{title}}</div>
            <div class="medium-article__description">{{indent}}</div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ["ImgSrc", "title", "indent", "id"],
    
}
</script>

