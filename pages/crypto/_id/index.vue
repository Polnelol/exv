<template>
  <div class="container">
    <Header/>
    <section class="main-content">
      <div class="main-content__cnt cnt">
        <div class="single-page-title">{{ CryptoSingle.title }}</div>
        <div class="single-page-date">{{ CryptoSingle.date }}</div>
        <div class="single-page-img">
          <img :src="CryptoSingle.ImgSrc">
        </div>
        <div class="single-page-indent" v-html="CryptoSingle.indent"></div>
      </div>
    </section>
    <Footer/>
  </div>
</template>
<script>
import '~/assets/main.css'
import Header from '~/pages/header/header.vue'
import Footer from '~/pages/footer/footer.vue'
import post1 from "~/posts/crypto/crypto-news1/crypto-news1.json"
import indent1 from "~/posts/crypto/crypto-news1/crypto-news1.md"
import post2 from "~/posts/crypto/crypto-news2/crypto-news2.json"
import indent2 from "~/posts/crypto/crypto-news2/crypto-news2.md"
import post3 from "~/posts/crypto/crypto-news3/crypto-news3.json"
import indent3 from "~/posts/crypto/crypto-news3/crypto-news3.md"

export default {
    components: {
      Header,
      Footer,
      post1,
      post2,
      post3,
      indent1,
      indent2,
      indent3
    },
    computed: {
      indent1() {
        return indent1
      },
      post1() {
        return post1
      },
      indent2() {
        return indent2
      },
      post2() {
        return post2
      },
      indent3() {
        return indent3
      },
      post3() {
        return post3
      },
    },
    asyncData(context) {
        return new Promise((resolve, reject) => {
                resolve({
                   CryptoSingle: [
                       {    ImgSrc: post1.ImgSrc,
                            id: "1",
                            title: post1.title,
                            date: post1.date,
                            indent: indent1
                        },
                        {
                            ImgSrc: post2.ImgSrc,
                            id: "2",
                            title: post2.title,
                            date: post2.date,
                            indent: indent2
                        },
                        {
                            ImgSrc: post3.ImgSrc,
                            id: "3",
                            title: post3.title,
                            date: post3.date,
                            indent: indent3
                        }
                   ].find(el => el.id === context.params.id)
                })
        })
    }
}
</script>

<style scoped>
.main-content {
  width: 800px;
  margin: 0 auto;
}
</style>