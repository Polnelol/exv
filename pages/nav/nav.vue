<template>
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
</template>

<script></script>

<style scoped>
    .navbar {
        height: 50px;
        background: #f9f9f9;
        border-bottom: 1px solid #e8e8e8;
        margin: 0px 0 30px 0;
    }

    .navbar ul {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
    }

    .navbar__item {
        margin-right: 25px;
        height: 50px;
        line-height: 50px;
    }

    .navbar__item a {
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: #000;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    @media (max-width: 850px) {
        .navbar {
            display: none;
        }
    }
</style>