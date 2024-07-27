<script setup lang="ts">
import Card from '../Card/Card.vue';
import { Character } from '@/types/types';


defineProps<{
  characters: Character[];
}>()

</script>

<template>
      <ul class="cards">
        <router-link v-for="character in characters" :key="character.id" :to="{ name: 'character', params: { id: character.id }}">
          <Card category="preview" :card="character"/>
        </router-link>
      </ul>
</template>


<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        padding-top: 10px;
        gap: 10px;
    }

    .cards__card:hover {
        cursor: pointer;
        transition: 0.2s all;
        box-shadow: 0 2px 4px -4px rgba(0, 0, 0, 0.16), 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 10px 18px 8px rgba(0, 0, 0, 0.09);
    }
 

</style>