<template>
    <div class="crypto-wrapper">
      <div class="crypto-wrapper__top">
        <span class="crypto-name">{{name}}</span>
        <span class="crypto-price">${{price_usd}}</span>
      </div>
      <div class="crypto-wrapper__bottom">
        <span class="crypto-rank">{{symbol}}</span>
        <span class="crypto-change" :class="color">{{percent_change_24h}}%</span>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    props:['name','price_usd','percent_change_24h','symbol'],

    computed: {
      color() {
        return this.percent_change_24h>0 ? "positive" : "negative";
      }
    }
}
</script>
<style>
.positive {
  position: relative;
  color: #13C24E;
}

.positive:before {
  position: absolute;
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  left: -20px;
  top: 50%;
  transform: translateY(-60%);
  border-radius: 2px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 10px solid #13C24E;
}  

.negative {
  position: relative;
  color: #FF0033;
}

.negative:before {
  position: absolute;
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  left: -20px;
  top: 50%;
  margin-top: -5px;
  transform: rotate(180deg);
  border-radius: 2px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 10px solid #FF0033;
}

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
  font-size: 14px;
  min-width: 40px;
  text-align: right;
}

.crypto-wrapper__top,
.crypto-wrapper__bottom {
  display: flex;
  justify-content: space-between;
}
</style>
