<script setup lang="ts">

import { computed, onMounted,  ref, watch } from 'vue';
import {  useRoute } from 'vue-router';
import { getCharacter,  getEpisodesByUrls} from '@/api/api';

import CharactersEpisodeList from '../CharactersEpisodeList/CharactersEpisodeList.vue';
import CharacterDescription from '../CharacterDescription/CharacterDescription.vue';

import { Character, Episode, AccordionItem } from '@/types/types';



import Accordion from '../Accordion/Accordion.vue';

const { params } = useRoute();

const character = ref<Character>();
const episodes = ref<Episode[]>([]);
const charactersInEpisode = ref<Character[]>([]);
const currentEpisode = ref<Episode>()


onMounted( async () => {
    character.value = await getCharacter(Number(params.id));
    episodes.value =  await getEpisodesByUrls(character.value.episode);
})


const formatDataEpisods = (episodes: Episode[]) : AccordionItem[]  => {
    return episodes.reduce((prev, curr) => {

        prev.push({
            id: curr.id,
            label: `Серия №${curr.id}`,
            content: {...curr},
        })

        return prev;
    }, [] as AccordionItem[])
}
    
const computedEpisods = computed(() => {
    return formatDataEpisods(episodes.value)
})
     

const setEpisodeItem = (episode: Episode) => {
    currentEpisode.value = episode;
}



const execCharacterIdFromUrl = (url : string) => {
    let id = /(?<=character\/)\d*/.exec(url);
    if (!id) {
        return 0;
    }
    return Number(id);
}

watch(() => currentEpisode.value, async () => {
    if (currentEpisode.value) {
        let ids = currentEpisode.value.characters.map(execCharacterIdFromUrl);
        charactersInEpisode.value = await getCharacter(ids);
    }
})



</script>

<template>
    <div class="character-details" v-if="character">
        <CharacterDescription :character="character"/>
        <hr class="line"/>
        <Accordion class="test" :items="computedEpisods" :setAccordionItem="setEpisodeItem" v-slot="{content} : {content: Episode}">
            <div>Название серии: {{ content.name }}</div>
            <div>Дата выхода: {{ content.air_date }}</div>
            <CharactersEpisodeList :charactersEpisode="charactersInEpisode"/>
        </Accordion>
    </div>
</template>


<style>

    .line {
        width: 100%;
        color: gray;
    }

    .accordion {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        align-items: top;
        gap: 10px;
    }


    a {
        text-decoration: none;
        color: black;
    }

    .character-details {
        padding: 20px 0;
        display: grid;      
    }
   


</style>