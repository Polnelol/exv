<template>
    <div class="container">
        <Header/> 
        <section class="main-content">
            <div class="main-content__cnt cnt">
                <div class="section-title">News</div>
                <section class="main-content__primary">
                    <div class="main-content-left left-cnt">
                        <div class="medium-article-wrap">
                            <div class="medium-article">
                                <NewsSingle
                                    v-for="NewsSingle in NewsSingles"
                                    :key="NewsSingle.id"
                                    :ImgSrc="NewsSingle.ImgSrc"
                                    :title="NewsSingle.title"
                                    :previewText="NewsSingle.previewText"
                                    :id="NewsSingle.id"/>
                            </div>
                            <a href="https://l2.exchange/"><div class="left-cnt left-cnt__banner"></div></a>
                        </div>
                    </div>
                    <div class="main-content-right right-cnt">
                        <div class="crypto-wrap">
                            <div class="crypto-logo-wrap">
                                <div v-for="item in items" :key="item.id" class="crypto-logo-item">
                                <img v-bind:src="item.img" v-bind:alt="item.title">
                                </div>
                            </div>
                            <div class="crypto-info-wrap">
                                <div v-for="currency in currencies" :key="currency.name" class="crypto-info-item">
                                    <cryptoWidget 
                                        :name="currency.name" 
                                        :price_usd="currency.price_usd" 
                                        :symbol="currency.symbol"
                                        :percent_change_24h="currency.percent_change_24h"
                                    >
                                    </cryptoWidget>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
  import axios from "axios"
  import Header from '~/pages/header/header.vue'
  import Footer from '~/pages/footer/footer.vue'
  import CryptoWidget from '~/components/CryptoWidget.vue'
  import NewsSingle from '~/components/news-single.vue'
  import '~/assets/main.css'
  import post1 from "~/posts/news/news1/news1.json"
  import post2 from "~/posts/news/news2/news2.json"
  import post3 from "~/posts/news/news3/news3.json"
  import post4 from "~/posts/news/news4/news4.json"
  import indent1 from "~/posts/news/news1/news1.md"
  import indent2 from "~/posts/news/news2/news2.md"
  import indent3 from "~/posts/news/news3/news3.md"
  import indent4 from "~/posts/news/news4/news4.md"
  
  

  export default {
    components: {
      Header,
      Footer,
      CryptoWidget,
      NewsSingle,
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
      indent2() {
        return indent2
      },
      indent3() {
        return indent3
      },
      indent4() {
        return indent4
      }
    },
    asyncData(){
        return axios
        .get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
        .then(response => {
            return {
                currencies: response.data
            };
        });
    },
    data () {
        return {
            items: [
                {title: '1', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png'},
                {title: '2', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/52.png'},
                {title: '3', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png'},
                {title: '4', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png'},
                {title: '5', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1765.png'},
                {title: '6', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/512.png'},
                {title: '7', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/3602.png'},
                {title: '8', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/825.png'},
                {title: '9', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/2.png'},
                {title: '10', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1958.png'}
            ],
            NewsSingles: [
                        {   ImgSrc: post1.ImgSrc,
                            id: "1",
                            title: post1.title,
                            indent: post1.indent
                        },
                        {   ImgSrc: post2.ImgSrc,
                            id: "2",
                            title: post2.title,
                            indent: post2.indent
                        },
                        {   ImgSrc: post3.ImgSrc,
                            id: "3",
                            title: post3.title,
                            indent: post3.indent
                        },
                        {   ImgSrc: post4.ImgSrc,
                            id: "4",
                            title: post4.title,
                            indent: post4.indent
                        },
                    ]
        }
    }
  }
</script>


<style>
</style>



