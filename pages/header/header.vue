<template>
    <header class="header">
      <div class="header__cnt cnt">
        <div class="header__logo">
        </div>
        <div class="header__search-block">
            <input class="header__search">
            <img class="header__search-icon" src="/header-img/loupe.png">
        </div>
      </div>
    </header>
</template>

<style>
    .header {
    background-color: #000;
    }

    .header__logo {
        width: 150px;
        height: 50px;
        background: url("/header-img/logo.svg") no-repeat center;
    }

    .header__search-block {
        position: relative;
    }

    .header__search {
        width: 300px;
        height: 40px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 3px; 
        color: #000;
        font-size: 18px;
        padding: 0 10px;
        border: none;
    }

    .header__search-icon {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -10px;
    }

    .header__cnt {
        color: #fff;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
    }
</style>
