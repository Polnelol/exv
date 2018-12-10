<template>
  <div class="container">
    <Header/> 
    <section class="main-content">
      <div class="main-content__cnt cnt">
        <div class="main-content-left left-cnt">
          <div class="cnt-us">

          </div>
          <div class="data-wrap">
            <div class="data-item phone">Call at anytime: <span>+1 347 983-97-03</span></div>
            <div class="data-item email">Send letters: <span>hello@l2.exchange</span></div>
            <div class="data-item address">Visit us: <span>Moscow, Zamoskvorechnaya str., 25, of.5</span></div>
          </div>
        </div>
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
        }
    }
  }
</script>

<style>
.cnt-us {
  height: 500px;
  background: url("/contact-img/level2-img1.jpg") no-repeat center;
  margin-bottom: 20px;
}

.data-wrap {
  height: 230px;
  background: #FAFAFA;
}

.data-item {
  height: 77px;
  line-height: 77px;
  box-sizing: border-box;
  font-size: 14px;
  color: #A2A2A2;
}

.data-item:nth-child(1),
.data-item:nth-child(2) {
  border-bottom: 1px solid #E6E6E6;
}

.phone {
  padding-left: 130px;
}

.email {
  padding-left: 165px;
}

.address {
  padding-left: 195px;
}

.phone span,
.email span,
.address span {
  color: #5DD581;
  font-size: 16px;
}
</style>

