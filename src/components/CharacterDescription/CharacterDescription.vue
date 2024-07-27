<script setup lang="ts">

import { Character } from '../../types/types';
import { calculateStatus } from '../../helpers/helpers';

   const props = defineProps<{
      character: Character
   }>()

</script>

<template>
    <h1 class="character-description__title">{{ character.name }}</h1>
        <img class="character-description__image" :src="character.image" :width="400" :height="400"/>
        <div class="character-details__info">
            <div>Статус: {{ calculateStatus(character.status) }}</div>
            <div>Пол: {{ character.gender }}</div>
            <div>Локация: {{ character.location.name }}</div>
            <div>Расса: {{ character.species }}</div>
            <div>Происхождение: {{ character.origin.name }}</div>
      </div>
</template>


<style>
     .character-description__title {
        text-transform: uppercase;
        font-size: 40px;
    }

    .character-description__image {
        border-radius: 8px;
    }
</style>