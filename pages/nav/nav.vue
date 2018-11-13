<template>
    <nav class="navbar">
      <div class="navbar__cnt cnt">
        <ul>
          <li class="navbar__item"><a href="">Лента</a></li>
          <li class="navbar__item"><a href="">Новости</a></li>
          <li class="navbar__item"><a href="">Трейдеру</a></li>
          <li class="navbar__item"><a href="">Крипта</a></li>
          <li class="navbar__item"><a href="">Level 2</a></li>
          <li class="navbar__item"><a href="">Контакты</a></li>
        </ul>
      </div>
    </nav>
</template>

<script></script>

<style>
    .navbar {
        height: 60px;
        background: #f9f9f9;
        border-bottom: 1px solid #e8e8e8;
        margin-bottom: 30px;
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
        height: 60px;
        line-height: 60px;
    }

    .navbar__item a {
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: #000;
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
    }
</style>