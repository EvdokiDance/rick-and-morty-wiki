<script setup lang="ts">
import CharacterPreview from '../CharacterPreview/CharacterPreview.vue';
import CharacterDetails from '../CharacterDetails/CharacterDetails.vue';
import { Character } from '@/types/types';

   const props = defineProps<{
      card: Character
      category: string
   }>()

</script>

<template>
    <div v-if="category === 'preview'">
       <CharacterPreview :id="card.id" :image="card.image" :name="card.name" :status="card.status"/>
    </div>
    <div v-if="category === 'details'">
       <CharacterDetails/>
    </div>
</template>


<style>
    
</style>