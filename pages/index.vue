<template>
  <div class="container">
    <Header/> 
    <Nav/>    
    <section class="main-content">
      <div class="main-content__cnt cnt">
        <section class="main-content__primary-news">
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
  import Header from '~/pages/header/header.vue'
  import Nav from '~/pages/nav/nav.vue'
  import Footer from '~/pages/footer/footer.vue'
  import p1 from '../posts/p1.md'
  import CryptoWidget from '~/components/CryptoWidget.vue'
  import axios from "axios"
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

.container {
}

.cnt {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-content__primary-news {
  display: flex;
  justify-content: space-between;
}

.left-cnt {
  width: 70%;
}

.right-cnt {
  width: 25%;
}

.large-article {
  margin-bottom: 20px;
}

.large-article__img {
  width: 100%;
  height: 320px;
  max-height: 320px;
  margin-bottom: 20px;
  background-color: #F9F9F9;
}

.large-article__img img {
  width: 100%;
  height: auto;
}

.large-article__title {
  font-size: 22px;
  margin-bottom: 20px;
}

.medium-article-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.medium-article {
  width: 48%;
  margin-bottom: 20px;
}

.medium-article__img {
  width: 100%;
  height: 180px;
  max-height: 180px;
  margin-bottom: 20px;
  background-color: #F9F9F9;
}

.medium-article__img img {
  width: 100%;
  height: auto;
}

.medium-article__title {
  font-size: 18px;
  margin-bottom: 15px;
}

.small-article-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.small-article {
  width: 32%;
  margin-bottom: 15px;
}

.small-article__img {
  width: 100%;
  height: 180px;
  max-height: 180px;
  margin-bottom: 20px;
  background-color: #F9F9F9;
}

.small-article__img img {
  width: 100%;
  height: auto;
}

.small-article__title {
  font-size: 18px;
  margin-bottom: 15px;
}

.crypto-wrap {
  display: flex;
  justify-content: space-between;
}

.crypto-logo-wrap {
  min-width: 35px;
}

.crypto-info-wrap {
  width: 100%;
}

.crypto-logo-item {
  margin-bottom: 25px;
  font-size: 16px;
  display: flex;
  min-height: 41px;
  align-items: baseline;
  margin-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 18px;
}

.crypto-logo-item img {
  width: 32px;
  height: 32px;
}

.crypto-info-item {
  font-size: 16px;
  display: flex;
  min-height: 40px;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 13px;
  padding-left: 20px;
}
</style>

