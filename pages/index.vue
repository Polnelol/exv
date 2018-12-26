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
              :id="Level2Single1.id"
              :indent="Level2Single1.indent"/>
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
                <NewsSingle1
                  v-for="NewsSingle1 in NewsSingles1"
                  :key="NewsSingle1.id"
                  :ImgSrc="NewsSingle1.ImgSrc"
                  :title="NewsSingle1.title"
                  :id="NewsSingle1.id"/>
              </div>
            </div>
            <transition name="fade">
            <div v-if="show1" class="small-article-wrap">
              <div class="small-article">
                <CryptoSingle2
                  v-for="CryptoSingle2 in CryptoSingles2"
                  :key="CryptoSingle2.id"
                  :ImgSrc="CryptoSingle2.ImgSrc"
                  :title="CryptoSingle2.title"
                  :id="CryptoSingle2.id"/>
              </div>
              <div class="small-article">
                <TradingSingle2
                  v-for="TradingSingle2 in TradingSingles2"
                  :key="TradingSingle2.id"
                  :ImgSrc="TradingSingle2.ImgSrc"
                  :title="TradingSingle2.title"
                  :id="TradingSingle2.id"/>
              </div>
              <div class="small-article">
                <NewsSingle2
                  v-for="NewsSingle2 in NewsSingles2"
                  :key="NewsSingle2.id"
                  :ImgSrc="NewsSingle2.ImgSrc"
                  :title="NewsSingle2.title"
                  :id="NewsSingle2.id"/>
              </div>
            </div>
            </transition>
            <transition name="fade">
            <div v-if="showbtn1" class="paginator">
              <button v-on:click="show1 = true, showbtn1 = false, showbtn2 = true " class="show-more-btn">Show more</button>
            </div>
            </transition>
            <transition name="fade">
            <div v-if="show2" class="small-article-wrap">
              <div class="small-article">
                <CryptoSingle3
                  v-for="CryptoSingle3 in CryptoSingles3"
                  :key="CryptoSingle3.id"
                  :ImgSrc="CryptoSingle3.ImgSrc"
                  :title="CryptoSingle3.title"
                  :id="CryptoSingle3.id"/>
              </div>
              <div class="small-article">
                <TradingSingle3
                  v-for="TradingSingle3 in TradingSingles3"
                  :key="TradingSingle3.id"
                  :ImgSrc="TradingSingle3.ImgSrc"
                  :title="TradingSingle3.title"
                  :id="TradingSingle3.id"/>
              </div>
              <div class="small-article">
                <NewsSingle3
                  v-for="NewsSingle3 in NewsSingles3"
                  :key="NewsSingle3.id"
                  :ImgSrc="NewsSingle3.ImgSrc"
                  :title="NewsSingle3.title"
                  :id="NewsSingle3.id"/>
              </div>
            </div>
            
            </transition>
            <transition name="fade">
            <div v-if="showbtn2" class="paginator">
              <button v-on:click="show2 = true, showbtn2 = false" class="show-more-btn">Show more</button>
            </div>
            </transition>
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
            <div class="subscribe-block">
              <div class="subscribe-block__title">Subscribe</div>
              <div class="subscribe-block__wrap">
                <input type="email" class="subscribe-block__email" placeholder="Your email">
                <input type="button" class="subscribe-block__btn">
              </div>
            </div>
            <div class="most-recent">
              <div class="most-recent__title">Most recent articles</div>
              <div class="most-recent__wrap">
                <Level2Single1
                  v-for="Level2Single1 in Level2Singles1"
                  :key="Level2Single1.id"
                  :title="Level2Single1.title"
                  :id="Level2Single1.id"
                  :date="Level2Single1.date"/>
                <CryptoSingle1
                  v-for="CryptoSingle1 in CryptoSingles1"
                  :key="CryptoSingle1.id"
                  :title="CryptoSingle1.title"
                  :id="CryptoSingle1.id"
                  :date="CryptoSingle1.date"/>
                <TradingSingle1
                  v-for="TradingSingle1 in TradingSingles1"
                  :key="TradingSingle1.id"
                  :title="TradingSingle1.title"
                  :id="TradingSingle1.id"
                  :date="TradingSingle1.date"/>
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
  import CryptoSingle2 from '~/components/crypto-single.vue'
  import CryptoSingle3 from '~/components/crypto-single.vue'
  import NewsSingle1 from '~/components/news-single.vue'
  import NewsSingle2 from '~/components/news-single.vue'
  import NewsSingle3 from '~/components/news-single.vue'
  import TradingSingle1 from '~/components/trading-single.vue'
  import TradingSingle2 from '~/components/trading-single.vue'
  import TradingSingle3 from '~/components/trading-single.vue'
  import LargePost1 from "~/posts/level2/level2-news1/level2-news1.json"
  import MediumPost1 from "~/posts/level2/level2-news2/level2-news2.json"
  import MediumPost2 from "~/posts/level2/level2-news3/level2-news3.json"
  import SmallPost1 from "~/posts/crypto/crypto-news1/crypto-news1.json"
  import SmallPost2 from "~/posts/trading/trading-news1/trading-news1.json"
  import SmallPost3 from "~/posts/trading/trading-news2/trading-news2.json"
  import SmallPost4 from "~/posts/news/news1/news1.json"
  import SmallPost5 from "~/posts/crypto/crypto-news2/crypto-news2.json"
  import SmallPost6 from "~/posts/trading/trading-news2/trading-news2.json"
  import SmallPost7 from "~/posts/news/news2/news2.json"
  import SmallPost8 from "~/posts/crypto/crypto-news3/crypto-news3.json"
  import SmallPost9 from "~/posts/trading/trading-news3/trading-news3.json"
  import SmallPost10 from "~/posts/news/news3/news3.json"
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
      CryptoSingle2,
      CryptoSingle3,
      TradingSingle1,
      TradingSingle2,
      TradingSingle3,
      NewsSingle1,
      NewsSingle2,
      NewsSingle3
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
            Level2Singles1: [
                        {   ImgSrc: LargePost1.ImgSrc,
                            id: "1",
                            title: LargePost1.title,
                            indent: LargePost1.indent,
                            date: LargePost1.date
                        }
                    ],
            Level2Singles2: [
                        {   ImgSrc: MediumPost1.ImgSrc,
                            id: "2",
                            title: MediumPost1.title,
                            indent: MediumPost1.indent,
                            date: MediumPost1.date
                        }
                    ],
            Level2Singles3: [
                        {   ImgSrc: MediumPost2.ImgSrc,
                            id: "3",
                            title: MediumPost2.title,
                            indent: MediumPost2.indent,
                            date: MediumPost2.date
                        }
                    ],
            CryptoSingles1: [
                        {   ImgSrc: SmallPost1.ImgSrc,
                            id: "1",
                            title: SmallPost1.title,
                            indent: SmallPost1.indent,
                            date: SmallPost1.date
                        }
                    ],
            TradingSingles1: [
                        {   ImgSrc: SmallPost2.ImgSrc,
                            id: "1",
                            title: SmallPost2.title,
                            indent: SmallPost2.indent,
                            date: SmallPost2.date
                        }
                    ],
            NewsSingles1: [
                        {   ImgSrc: SmallPost4.ImgSrc,
                            id: "1",
                            title: SmallPost4.title,
                            indent: SmallPost4.indent,
                            date: SmallPost4.date
                        }
                    ],
            CryptoSingles2: [
                        {   ImgSrc: SmallPost5.ImgSrc,
                            id: "2",
                            title: SmallPost5.title,
                            indent: SmallPost5.indent,
                            date: SmallPost5.date
                        }
                    ],
            TradingSingles2: [
                        {   ImgSrc: SmallPost6.ImgSrc,
                            id: "2",
                            title: SmallPost6.title,
                            indent: SmallPost6.indent,
                            date: SmallPost6.date
                        }
                    ],
            NewsSingles2: [
                        {   ImgSrc: SmallPost7.ImgSrc,
                            id: "2",
                            title: SmallPost7.title,
                            indent: SmallPost7.indent,
                            date: SmallPost7.date
                        }
                    ],
            CryptoSingles3: [
                        {   ImgSrc: SmallPost8.ImgSrc,
                            id: "3",
                            title: SmallPost8.title,
                            indent: SmallPost8.indent,
                            date: SmallPost8.date
                        }
                    ],
            TradingSingles3: [
                        {   ImgSrc: SmallPost9.ImgSrc,
                            id: "3",
                            title: SmallPost9.title,
                            indent: SmallPost9.indent,
                            date: SmallPost9.date
                        }
                    ],
            NewsSingles3: [
                        {   ImgSrc: SmallPost10.ImgSrc,
                            id: "3",
                            title: SmallPost10.title,
                            indent: SmallPost10.indent,
                            date: SmallPost10.date
                        }
                    ],
            show1: false,
            show2: false,
            showbtn1: true,
            showbtn2: false
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

