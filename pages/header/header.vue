<template>
    <div>
        <div class="header-mobile-nav">
        <nav v-if="seen" class="navbar">
            <div class="navbar__cnt cnt">
                <ul>
                    <li class="navbar__item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/news/news-list">News</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/trading/trading-list">Trading</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/crypto/crypto-list">Crypto</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/level2/level2-list">Level2</nuxt-link> </li>
                    <li class="navbar__item"><a href="https://l2.exchange/">Contact us</a></li>
                </ul>
            </div>
        </nav>
        </div>
    <header class="header">
      <div class="header__cnt cnt">
          <nuxt-link to="/">
            <div class="header__logo logo"></div>
          </nuxt-link>
          <div class="header-nav">
          <nav class="navbar">
            <div class="navbar__cnt cnt">
                <ul>
                    <li class="navbar__item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/news/news-list">News</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/trading/trading-list">Trading</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/crypto/crypto-list">Crypto</nuxt-link></li>
                    <li class="navbar__item"><nuxt-link to="/level2/level2-list">Level2</nuxt-link> </li>
                    <li class="navbar__item"><a href="https://l2.exchange/">Contact us</a></li>
                </ul>
            </div>
          </nav>
          </div>
        <!--
        <div class="header__search-block">
            <input class="header__search">
            <img class="header__search-icon" src="/header-img/loupe.png">
        </div>
        -->
          
      </div>
    </header>
    <header class="header-mobile">
        <div class="header__cnt cnt" style="color: black!important">
            <button class="burger-menu" v-on:click="seen = !seen" v-bind:class="{ BurgerMenuActive: seen }"></button>
            <div class="header__logo logo"></div>
        </div>
    </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
        seen: false
        }
    }
}
</script>


<style scoped>
    .header {
        background-color: #18232C;
        height: 65px;
        margin-bottom: 20px;
    }

    .header-mobile {
        display: none;
        background: #18232C;
        height: 60px;
    }

    .header-mobile .logo {
        margin-left: auto;
        margin-top: 4px;
        z-index: 999;
    }

    .logo {
        width: 50px;
        height: 50px;
        background: url("/header-img/logo.png") no-repeat center;
        background-size: cover;
    }

    .header__search-block {
        position: relative;
    }

    .header__search {
        width: 250px;
        height: 30px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 3px; 
        color: #000;
        font-size: 18px;
        padding: 0 10px;
        border: none;
        padding-right: 45px;
        margin-bottom: 5px;
    }

    .header__search-icon {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -10px;
        cursor: pointer;
    }

    .header__cnt {
        height: 100%;
        color: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 24px;
    }

    .burger-menu {
        position: absolute;
        width: 35px;
        height: 35px;
        border: none;
        z-index: 999;
        background: url("/header-img/burger-menu.svg") no-repeat center;
        background-size: cover;
        outline: none;
    }

    .BurgerMenuActive {
        background: url("/header-img/burger-menu-close.svg") no-repeat center;
        width: 25px;
        height: 25px;
        background-size: cover;
    }

    .header-mobile-nav .navbar {
        position: absolute;
        width: 100%;
        z-index: 99;
        background: #18232C;
        border-bottom: 1px solid #e8e8e8;
        margin: 0px 0 30px 0;
        padding: 50px 0 20px 0;
    }

    .header-mobile-nav .navbar ul {
        width: 100%;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
    }

    .header-mobile-nav .navbar__item {
        margin-right: 25px;
        height: 50px;
        line-height: 50px;
    }

    .header-mobile-nav .navbar__item a {
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
        transition: 0.2s;
    }

    .header-mobile-nav .navbar__item a:hover {
        color: #35CC62;
    }

    .header-nav .navbar ul {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
    }

    .header-nav .navbar__item {
        margin-right: 25px;
        height: 50px;
        line-height: 50px;
    }

    .header-nav .navbar__item a {
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        transition: 0.2s;
    }

    .header-nav .navbar__item a:hover {
        color: #35CC62;
    }

    @media (max-width: 850px) {
        header {
            display: none;
        }

        .header-mobile {
            display: flex;
            margin-bottom: 20px;
        }
    }
</style>
