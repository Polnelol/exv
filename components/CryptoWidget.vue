<template>
    <div class="crypto-wrapper" id="vue-app">
          <span class="crypto-name">{{name}}</span>
          <span class="crypto-price">{{price_usd}}$</span><br>
          <span class="crypto-change">{{percent_change_24h}}</span>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    props:['name','price_usd','percent_change_24h','rank']
}
</script>
<style>
.crypto-name {
  font-size: 16px;
}

.crypto-price {
  font-size: 14px;
}

.crypto-change {
  font-size: 14px;;
}
</style>
