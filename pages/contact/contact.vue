<template>
  <div class="container">
    <Header/> 
    <section class="main-content">
      <div class="main-content__cnt cnt">
        Contact us
      </div>
    </section>
    <Footer/>
  </div>
  
</template>

<script>
  import axios from "axios"
  import Header from '~/pages/header/header.vue'
  import Footer from '~/pages/footer/footer.vue'
  import '~/assets/main.css'
  

  
  export default {
    components: {
      Header,
      Footer
    },
    ncData(){
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

