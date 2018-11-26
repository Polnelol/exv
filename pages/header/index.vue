<template>
    <div id="example-1">
  <button v-on:click="isHidden = true">Hide the text below</button>
  <button v-on:click="isHidden = !isHidden">Toggle hide and show</button>
  
  <h1 v-if="!isHidden">Hide me on click event!</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false
    }
}
}
</script>