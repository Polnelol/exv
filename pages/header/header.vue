<template>
    <header class="header">
      <div class="header__cnt cnt">
          <nuxt-link to="/">
            <div class="header__logo logo"></div>
          </nuxt-link>
        <div class="header__search-block">
            <input class="header__search">
            <img class="header__search-icon" src="/header-img/loupe.png">
        </div>
      </div>
    </header>
</template>

<style>
    .header {
        background-color: #1E1E1E;
    }

    .logo {
        width: 150px;
        height: 50px;
        background: url("/header-img/logo.svg") no-repeat center;
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
        color: #fff;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
    }
</style>
