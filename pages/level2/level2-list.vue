<template>
    <div class="container">
        <Header/> 
        <section class="main-content">
            <div class="main-content__cnt cnt">
                <div class="section-title">LEVEL2</div>
                <section class="main-content__primary">
                    <div class="main-content-left left-cnt">
                        <div class="medium-article-wrap">
                            <div class="medium-article">
                                <Level2Single
                                    v-for="Level2Single in Level2Singles"
                                    :key="Level2Single.id"
                                    :ImgSrc="Level2Single.ImgSrc"
                                    :title="Level2Single.title"
                                    :previewText="Level2Single.previewText"
                                    :id="Level2Single.id"
                                    :date="Level2Single.date"/>
                            </div>
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
  import Level2Single from '~/components/level2-single.vue'
  import '~/assets/main.css'
  import post1 from "~/posts/level2/level2-news1/level2-news1.json"
  import post2 from "~/posts/level2/level2-news2/level2-news2.json"
  import post3 from "~/posts/level2/level2-news3/level2-news3.json"
  import indent1 from "~/posts/level2/level2-news1/level2-news1.md"
  import indent2 from "~/posts/level2/level2-news2/level2-news2.md"
  import indent3 from "~/posts/level2/level2-news3/level2-news3.md"
  
  

  export default {
    components: {
      Header,
      Footer,
      CryptoWidget,
      Level2Single,
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
                {title: '4', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/512.png'},
                {title: '5', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png'},
                {title: '6', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/825.png'},
                {title: '7', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1765.png'},
                {title: '8', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/3602.png'},
                {title: '9', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/2.png'},
                {title: '10', img: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1958.png'}
            ],
            Level2Singles: [
                        {   ImgSrc: post1.ImgSrc,
                            id: "1",
                            title: post1.title,
                            indent: post1.indent,
                            date: post1.date
                        },
                        {   ImgSrc: post2.ImgSrc,
                            id: "2",
                            title: post2.title,
                            indent: post2.indent,
                            date: post2.date
                        },
                        {   ImgSrc: post3.ImgSrc,
                            id: "3",
                            title: post3.title,
                            indent: post3.indent,
                            date: post3.date
                        }
                    ]
        }
    }
  }
</script>

<style>
.medium-article a {
    margin-bottom: 20px;
}

.medium-article__description {
    color: #A2A2A2;
    font-size: 13px;
    margin-top: -10px;
}
</style>



