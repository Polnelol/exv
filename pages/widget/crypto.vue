<template>
    <div>
        <div v-for="currency in currencies" :key="currency.name" class="crypto-info-item">
            <cryptoWidget 
                :name="currency.name" 
                :price_usd="currency.price_usd" 
                :symbol="currency.symbol"
                :percent_change_24h="currency.percent_change_24h"
                >
            </cryptoWidget>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import CryptoWidget from '~/components/CryptoWidget.vue'
export default {
    asyncData(){
        return axios
        .get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
        .then(response => {
            return {
                currencies: response.data
            };
        });
    },
}
</script>

