<template>
    <div class="container">
        <Header/> 
        <Nav/>
        <section class="main-content">
            <div class="main-content__cnt cnt">
                <div class="section-title">Crypto</div>
                <section class="main-content__primary">
                    <div class="main-content-left left-cnt">
                        <div class="medium-article-wrap">
                            <CryptoSingle
                                v-for="CryptoSingle in CryptoSingles"
                                :key="CryptoSingle.id"
                                :ImgSrc="CryptoSingle.ImgSrc"
                                :title="CryptoSingle.title"
                                :previewText="CryptoSingle.previewText"
                                :id="CryptoSingle.id"/>
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
  import Nav from '~/pages/nav/nav.vue'
  import Footer from '~/pages/footer/footer.vue'
  import CryptoWidget from '~/components/CryptoWidget.vue'
  import CryptoSingle from '~/components/crypto-single.vue'
  import '~/assets/main.css'
  import p1 from '~/posts/p1.md'
  import p2 from '~/posts/p2.md'
  import post1 from "~/posts/crypto/crypto-news1/crypto-news1.json"
  import post2 from "~/posts/crypto/crypto-news2/crypto-news2.json"
  import post3 from "~/posts/crypto/crypto-news3/crypto-news3.json"
  
  

  export default {
    components: {
      Header,
      Nav,
      Footer,
      CryptoWidget,
      CryptoSingle,
      post1,
      post2,
      post3
    },
    computed: {
      CryptoNews1() {
        return indent1
      },
      CryptoNews2() {
        return indent2
      },
      CryptoNews3() {
        return indent3
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
                {title: '2', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png'},
                {title: '3', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/52.png'},
                {title: '4', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png'},
                {title: '5', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/512.png'},
                {title: '6', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1765.png'},
                {title: '7', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/2.png'},
                {title: '8', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/2010.png'},
                {title: '9', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/825.png'},
                {title: '10', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/328.png'}
            ],
            CryptoSingles: [
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
                        }
                    ]
        }
    }
  }
</script>


<style>
</style>



