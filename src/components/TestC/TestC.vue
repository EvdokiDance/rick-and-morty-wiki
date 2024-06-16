<script>

import { ref } from 'vue'

export default {
  setup() {
    const count = ref({id: 0})

    function increment() {

      count.value.id++;
    }

    return { 
      count,
      increment
    }
  }
}

</script>



<template>
  <h1 style="padding: 40px; color: black;">{{count.id}}</h1>
  <button @click="increment">increment count</button>
</template>