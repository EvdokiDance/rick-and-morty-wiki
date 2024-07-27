<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue';
import {Character} from '../../types/types';



defineProps<{
    charactersEpisode: Character[];
}>()

</script>

<template>  
  <h2 class="charactersEpisode__title">Список персонажей в серии</h2>
  <ul class="charactersEpisode"  v-if="charactersEpisode.length">
        <div class="charactersEpisode__container">
            <router-link v-for="character in charactersEpisode" class="charactersEpisode__item" :key="character.id" :to="{ name: 'character', params: { id: character.id }}">
                <li>
                    <img :src="character.image" width="50" height="50"/>
                    <div>{{ character.name }}</div>
                </li>
            </router-link>
        </div>
    </ul>
</template>


<style>
    .charactersEpisode {
        display: grid;
        gap: 10px;
    }
    .charactersEpisode__container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        align-items: start;
        gap: 30px;
    }

    /* .charactersEpisode__title {
        grid-column: 1/-1;
    } */

    .charactersEpisode__item {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

</style>