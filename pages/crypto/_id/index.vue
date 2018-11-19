<template>
    <section>
        <h1>{{ CryptoSingle.title }}</h1>
        <p>{{CryptoSingle.indent}}</p>
    </section>
</template>
<script>

import post1 from "~/posts/crypto/crypto-news1/crypto-news1.json"
import post2 from "~/posts/crypto/crypto-news2/crypto-news2.json"
import post3 from "~/posts/crypto/crypto-news3/crypto-news3.json"

export default {
    components: {
      post1,
      post2,
      post3
    },
    computed: {
      CryptoNews1() {
        return indent1
      },
      post1() {
        return post1
      },
      CryptoNews2() {
        return indent2
      },
      post2() {
        return post2
      },
      CryptoNews3() {
        return indent3
      },
      post3() {
        return post3
      },
    },
    asyncData(context) {
        return new Promise((resolve, reject) => {
                resolve({
                   CryptoSingle: [
                       {
                            id: "1",
                            title: post1.title,
                            indent: post1.indent
                        },
                        {
                            id: "2",
                            title: post2.title,
                            indent: post2.indent
                        },
                        {
                            id: "3",
                            title: post3.title,
                            indent: post3.indent
                        }
                   ].find(el => el.id === context.params.id)
                })
        })
    }
}
</script>