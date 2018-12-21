<template>
  <div class="container">
    <Header/>
    <section class="main-content">
      <div class="main-content__cnt cnt">
        <section class="main-content__primary-news main-content__primary">
          <div class="main-content-left left-cnt">
            <div class="single-page-title">{{ TradingSingle.title }}</div>
            <div class="single-page-date">{{ TradingSingle.date }}</div>
            <div class="single-page-img">
              <img v-if="TradingSingle.ImgSrc" :src="TradingSingle.ImgSrc" :key="TradingSingle.ImgSrc">
              <img v-else :key="TradingSingle.ImgSrc">
            </div>
            <div class="single-page-indent" v-html="TradingSingle.indent"></div>
            <div class="paginator">
              <div class="paginator-btn-wrpap">
              </div>
            </div>
            <div class="also-title">You may aslo like</div>
            <div class="medium-article-wrap also-wrap">
              <CryptoSingle1
                v-for="CryptoSingle1 in CryptoSingles1"
                :key="CryptoSingle1.id"
                :ImgSrc="CryptoSingle1.ImgSrc"
                :title="CryptoSingle1.title"
                :id="CryptoSingle1.id"/>
              <Level2Single1
                v-for="Level2Single1 in Level2Singles1"
                :key="Level2Single1.id"
                :ImgSrc="Level2Single1.ImgSrc"
                :title="Level2Single1.title"
                :id="Level2Single1.id"/>
              <NewsSingle1
                  v-for="NewsSingle1 in NewsSingles1"
                  :key="NewsSingle1.id"
                  :ImgSrc="NewsSingle1.ImgSrc"
                  :title="NewsSingle1.title"
                  :id="NewsSingle1.id"/>
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
                <NewsSingle1
                  v-for="NewsSingle1 in NewsSingles1"
                  :key="NewsSingle1.id"
                  :ImgSrc="NewsSingle1.ImgSrc"
                  :title="NewsSingle1.title"
                  :id="NewsSingle1.id"
                  :date="NewsSingle1.date"/>
              </div>
            </div>
            <div class="subscribe-block">
              <div class="subscribe-block__title">Subscribe</div>
              <div class="subscribe-block__wrap">
                <input type="email" class="subscribe-block__email" placeholder="Your email">
                <input type="button" class="subscribe-block__btn">
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
import '~/assets/main.css'
import Header from '~/pages/header/header.vue'
import Footer from '~/pages/footer/footer.vue'
import post1 from "~/posts/trading/trading-news1/trading-news1.json"
import indent1 from "~/posts/trading/trading-news1/trading-news1.md"
import post2 from "~/posts/trading/trading-news2/trading-news2.json"
import indent2 from "~/posts/trading/trading-news2/trading-news2.md"
import post3 from "~/posts/trading/trading-news3/trading-news3.json"
import indent3 from "~/posts/trading/trading-news3/trading-news3.md"
import post4 from "~/posts/trading/trading-news4/trading-news4.json"
import indent4 from "~/posts/trading/trading-news4/trading-news4.md"
import post5 from "~/posts/trading/trading-news5/trading-news5.json"
import indent5 from "~/posts/trading/trading-news5/trading-news5.md"
import Level2Single1 from '~/components/level2-single.vue'
import CryptoSingle1 from '~/components/crypto-single.vue'
import TradingSingle1 from '~/components/trading-single.vue'
import NewsSingle1 from '~/components/news-single.vue'
import LargePost1 from "~/posts/level2/level2-news1/level2-news1.json"
import SmallPost1 from "~/posts/crypto/crypto-news1/crypto-news1.json"
import SmallPost2 from "~/posts/trading/trading-news1/trading-news1.json"
import SmallPost4 from "~/posts/news/news1/news1.json"

export default {
    components: {
      Header,
      Footer,
      post1,
      post2,
      post3,
      post4,
      post5,
      indent1,
      indent2,
      indent3,
      indent4,
      indent5,
      Level2Single1,
      CryptoSingle1,
      TradingSingle1,
      NewsSingle1
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
      indent4() {
        return indent4
      },
      post4() {
        return post4
      },
      indent5() {
        return indent5
      },
      post5() {
        return post5
      },
    },
    asyncData(context) {
        return new Promise((resolve, reject) => {
                resolve({
                   TradingSingle: [
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
                        },
                        {
                            ImgSrc: post4.ImgSrc,
                            id: "4",
                            title: post4.title,
                            date: post4.date,
                            indent: indent4
                        },
                        {
                            ImgSrc: post5.ImgSrc,
                            id: "5",
                            title: post5.title,
                            date: post5.date,
                            indent: indent5
                        }
                   ].find(el => el.id === context.params.id)
                })
        })
    },
    data () {
        return {
            Level2Singles1: [
                        {   ImgSrc: LargePost1.ImgSrc,
                            id: "1",
                            title: LargePost1.title,
                            indent: LargePost1.indent,
                            date: LargePost1.date
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
            
        }
    }
}
</script>

<style scoped>

</style>


