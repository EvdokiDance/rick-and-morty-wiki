<script setup>
import { ref } from 'vue';
import Card from './components/Card/Card.vue';
import TestC from './components/TestC/TestC.vue';

// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

const listCards = [
  {title: 1, srcImg: 'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0', description: "Какой-то компонент"},
  {title: 2, srcImg: 'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0', description: "Какой-то компонент"},
  {title: 3, srcImg: 'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0', description: "Какой-то компонент"}
]

let idx = ref(0)


const arrColors = ['yellow', 'blue', 'green', 'red'];

function hadleBtn () {
 
  idx.value = (idx.value+1)%4;
  console.log(idx.value);
}

</script>



<template>
  <div class="card-list">
      <!-- <ul>
        <Card v-for="{ id, title, srcImg, description} in listCards" :key="id" :title="title" :src-img="srcImg" :description="description" :color="arrColors[idx]"/>
      </ul>
      <button @click="hadleBtn">нажать {{ idx  }}</button> -->
      <TestC/>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.card-list {
  display: flex;
  gap: 10px;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
