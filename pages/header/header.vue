<template>
    <header class="header">
      <div class="header__cnt cnt">
        <div class="header__logo">
        </div>
        <div class="header__search">
          search
        </div>
      </div>
    </header>
</template>

<style>
    .header {
    background-color: #FFF7EA;
    border-bottom: 1px solid #e8e8e8;
    }

    .header__logo {
        width: 150px;
        height: 50px;
        background: url("header-img/logo.svg") no-repeat center;
    }

    .header__cnt {
        color: #fff;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
    }

    .header__item-nav {
        margin-right: 25px;
        height: 60px;
        line-height: 60px;
    }

    .header__item-nav a {
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: #000;
        text-transform: uppercase;
    }
</style>
