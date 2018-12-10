<template>
  <div class="container">
    <Header/>   
    <section class="main-content">
      <div class="main-content__cnt cnt">
        <section class="main-content__primary-news main-content__primary">
          <div class="main-content-left left-cnt">
            <Level2Single1
              v-for="Level2Single1 in Level2Singles1"
              :key="Level2Single1.id"
              :ImgSrc="Level2Single1.ImgSrc"
              :title="Level2Single1.title"
              :id="Level2Single1.id"/>
            <div class="medium-article-wrap">
              <div class="medium-article">
                <Level2Single2
                  v-for="Level2Single2 in Level2Singles2"
                  :key="Level2Single2.id"
                  :ImgSrc="Level2Single2.ImgSrc"
                  :title="Level2Single2.title"
                  :id="Level2Single2.id"/>
              </div>
              <div class="medium-article">
                <Level2Single3
                  v-for="Level2Single3 in Level2Singles3"
                  :key="Level2Single3.id"
                  :ImgSrc="Level2Single3.ImgSrc"
                  :title="Level2Single3.title"
                  :id="Level2Single3.id"/>
              </div>
            </div>
            <div class="small-article-wrap">
              <div class="small-article">
                <CryptoSingle1
                  v-for="CryptoSingle1 in CryptoSingles1"
                  :key="CryptoSingle1.id"
                  :ImgSrc="CryptoSingle1.ImgSrc"
                  :title="CryptoSingle1.title"
                  :id="CryptoSingle1.id"/>
              </div>
              <div class="small-article">
                <TradingSingle1
                  v-for="TradingSingle1 in TradingSingles1"
                  :key="TradingSingle1.id"
                  :ImgSrc="TradingSingle1.ImgSrc"
                  :title="TradingSingle1.title"
                  :id="TradingSingle1.id"/>
              </div>
              <div class="small-article">
                <TradingSingle2
                  v-for="TradingSingle2 in TradingSingles2"
                  :key="TradingSingle2.id"
                  :ImgSrc="TradingSingle2.ImgSrc"
                  :title="TradingSingle2.title"

                  :id="TradingSingle2.id"/>
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
  import Level2Single1 from '~/components/level2-single.vue'
  import Level2Single2 from '~/components/level2-single.vue'
  import Level2Single3 from '~/components/level2-single.vue'
  import CryptoSingle1 from '~/components/crypto-single.vue'
  import TradingSingle1 from '~/components/trading-single.vue'
  import TradingSingle2 from '~/components/trading-single.vue'
  import LargePost1 from "~/posts/level2/level2-news1/level2-news1.json"
  import MediumPost1 from "~/posts/level2/level2-news2/level2-news2.json"
  import MediumPost2 from "~/posts/level2/level2-news3/level2-news3.json"
  import SmallPost1 from "~/posts/crypto/crypto-news1/crypto-news1.json"
  import SmallPost2 from "~/posts/trading/trading-news1/trading-news1.json"
  import SmallPost3 from "~/posts/trading/trading-news2/trading-news2.json"
  import '~/assets/main.css'
  
  

  
  export default {
    
    components: {
      Header,
      Footer,
      CryptoWidget,
      Level2Single1,
      Level2Single2,
      Level2Single3,
      CryptoSingle1,
      TradingSingle1,
      TradingSingle2
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
            Level2Singles1: [
                        {   ImgSrc: LargePost1.ImgSrc,
                            id: "1",
                            title: LargePost1.title,
                            indent: LargePost1.indent
                        }
                    ],
            Level2Singles2: [
                        {   ImgSrc: MediumPost1.ImgSrc,
                            id: "2",
                            title: MediumPost1.title,
                            indent: MediumPost1.indent
                        }
                    ],
            Level2Singles3: [
                        {   ImgSrc: MediumPost2.ImgSrc,
                            id: "3",
                            title: MediumPost2.title,
                            indent: MediumPost2.indent
                        }
                    ],
            CryptoSingles1: [
                        {   ImgSrc: SmallPost1.ImgSrc,
                            id: "1",
                            title: SmallPost1.title,
                            indent: SmallPost1.indent
                        }
                    ],
            TradingSingles1: [
                        {   ImgSrc: SmallPost2.ImgSrc,
                            id: "1",
                            title: SmallPost2.title,
                            indent: SmallPost2.indent
                        }
                    ],
            TradingSingles2: [
                        {   ImgSrc: SmallPost3.ImgSrc,
                            id: "2",
                            title: SmallPost3.title,
                            indent: SmallPost3.indent
                        }
                    ]
        }
    }
  }
</script>

<style scoped>
  .medium-article {
    width: 48%;
  }

  .medium-article a {
    width: 100%;
  }
</style>

