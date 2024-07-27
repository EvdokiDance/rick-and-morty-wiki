<script setup>
import Container from '../../components/Container/Container.vue';

import CharacterList from '../../components/CharacterList/CharacterList.vue'
</script>



<template>
  <Container>
    <h1 class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png"/>
    </h1>
    <CharacterList/>
  </Container>
</template>

<style scoped>
.logo {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 20px;
}

</style>
