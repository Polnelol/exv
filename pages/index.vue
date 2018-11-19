<template>
  <div class="container">
    <Header/> 
    <Nav/>    
    <section class="main-content">
      <div class="main-content__cnt cnt">
        <section class="main-content__primary-news main-content__primary">
          <div class="main-content-left left-cnt">
            <div class="large-article">
              <div class="large-article__img">
                <img src="">
              </div>
              <div class="large-article__title">{{posts.title}}</div>
              <div v-html="p1" class="large-article__description">
              </div>
            </div>
            <div class="medium-article-wrap">
              <div class="medium-article">
                <div class="medium-article__img">
                  <img src="">
                </div>
                <div class="medium-article__title">Title</div>
                <div class="medium-article__description">Lorem ipsum dolor sit amet, eos in illud malis prodesset, eum legendos rationibus no. Vel dico mazim essent ut, pro te quot altera. Explicari argumentum ex pri. Populo nusquam fastidii pri te. Cu cum prima solet tantas.
                </div>
              </div>
              <div class="medium-article">
                <div class="medium-article__img">
                  <img src="">
                </div>
                <div class="medium-article__title">Title</div>
                <div class="medium-article__description">Lorem ipsum dolor sit amet, eos in illud malis prodesset, eum legendos rationibus no. Vel dico mazim essent ut, pro te quot altera. Explicari argumentum ex pri. Populo nusquam fastidii pri te. Cu cum prima solet tantas.
                </div>
              </div>
            </div>
            <div class="small-article-wrap">
              <div class="small-article">
                <div class="small-article__img">
                  <img src="">
                </div>
                <div class="small-article__title">Title</div>
                <div class="small-article__description">
                  Lorem ipsum dolor sit amet, eos in illud malis prodesset, 
                  eum legendos rationibus no. Vel dico mazim essent ut, pro te quot altera. 
                  Explicari argumentum ex pri. Populo nusquam fastidii pri te. Cu cum prima solet tantas.
                </div>
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
      <Footer/>
    </section>
  </div>
  
</template>

<script>
  import axios from "axios"
  import Header from '~/pages/header/header.vue'
  import Nav from '~/pages/nav/nav.vue'
  import Footer from '~/pages/footer/footer.vue'
  import CryptoWidget from '~/components/CryptoWidget.vue'
  import '~/assets/main.css'
  import p1 from '../posts/p1.md'
  import post from "../posts/post1.json"
  

  
  export default {
    components: {
      Header,
      Nav,
      Footer,
      CryptoWidget
    },
    computed: {
      p1() {
        return p1
      },
      posts() {
        return post
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
        }
    }
  }
</script>

<style>

</style>

