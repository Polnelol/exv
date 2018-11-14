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
              <div v-html="LargeTitle" class="large-article__title"></div>
              <div class="large-article__description">Lorem ipsum dolor sit amet, eos in illud malis prodesset, eum legendos rationibus no. Vel dico mazim essent ut, pro te quot altera. Explicari argumentum ex pri. Populo nusquam fastidii pri te. Cu cum prima solet tantas.
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
                <div class="small-article__description">Lorem ipsum dolor sit amet, eos in illud malis prodesset, eum legendos rationibus no. Vel dico mazim essent ut, pro te quot altera. Explicari argumentum ex pri. Populo nusquam fastidii pri te. Cu cum prima solet tantas.</div>
              </div>
              <div class="small-article">
                <div class="small-article__img">
                  <img src="">
                </div>
                <div class="small-article__title">Title</div>
                <div class="small-article__description">Lorem ipsum dolor sit amet, eos in illud malis prodesset, eum legendos rationibus no. Vel dico mazim essent ut, pro te quot altera. Explicari argumentum ex pri. Populo nusquam fastidii pri te. Cu cum prima solet tantas.</div>
              </div>
              <div class="small-article">
                <div class="small-article__img">
                  <img src="">
                </div>
                <div class="small-article__title">Title</div>
                <div class="small-article__description">Lorem ipsum dolor sit amet, eos in illud malis prodesset, eum legendos rationibus no. Vel dico mazim essent ut, pro te quot altera. Explicari argumentum ex pri. Populo nusquam fastidii pri te. Cu cum prima solet tantas.</div>
              </div>
            </div>
          </div>
          <div class="main-content-right right-cnt">
            <Sidebar/>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '~/pages/header/header.vue'
  import Nav from '~/pages/nav/nav.vue'
  import Sidebar from '~/pages/sidebar/sidebar.vue'
  import LargeTitle from '../static/LargeTitle.md'

  export default {
    components: {
      Header,
      Nav,
      Sidebar
    },
    computed: {
      LargeTitle() {
        return LargeTitle
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
  width: 75%;
}

.right-cnt {
  width: 20%;
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
  height: 130px;
  max-height: 130px;
  margin-bottom: 15px;
  background-color: #F9F9F9;
}

.small-article__img {
  width: 100%;
  height: 180px;
  max-height: 180px;
  margin-bottom: 20px;
  background-color: #F9F9F9;
}

.small-article__title {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>

