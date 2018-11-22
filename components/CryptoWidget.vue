<template>
    <div class="crypto-wrapper">
      <div class="crypto-wrapper__top">
        <span class="crypto-name">{{name}}</span>
        <span class="crypto-price">${{price_usd}}</span>
      </div>
      <div class="crypto-wrapper__bottom">
        <span class="crypto-rank">{{symbol}}</span>
        <span class="crypto-change">{{percent_change_24h}}%</span>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    props:['name','price_usd','percent_change_24h','symbol']
}
</script>
<style>
.crypto-wrapper {
  width: 100%;
}

.crypto-name {
  font-size: 12px;
}

.crypto-price {
  font-size: 12px;
}

.crypto-change {
  font-size: 14px;;
}

.crypto-wrapper__top,
.crypto-wrapper__bottom {
  display: flex;
  justify-content: space-between;
}
</style>
