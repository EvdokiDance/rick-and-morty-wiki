<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue';
import { getCharactersPerPage} from '@/api/api'
import Card from '../Card/Card.vue';
import { Character } from '@/types/types';



const error = ref();
const page = ref(1);
const amountPages = ref(1);
const more = ref(true);
const characters = ref<Character[]>([]);

const searchParam = ref<string>();


const loader = ref<Element>();
const loadingObserver = ref<IntersectionObserver>();


watch(() => searchParam.value, () => {
      page.value = 1;
      more.value = true;
      characters.value = [];

      console.log(page.value, amountPages.value, more.value);

      if (error.value) {
        error.value = null;
      } 
})


watch(() => loader.value, () => {
  if (loadingObserver.value && loader.value) {
    loadingObserver.value.observe(loader.value);
  }
}) 



onMounted(() => {
      setLoadingObserver();
})


const fetcherCharacters = async () => {
           try {
                let charactersOnPage = await getCharactersPerPage(page.value, searchParam.value);
                characters.value.push(...charactersOnPage.results!);
                amountPages.value = Math.floor(charactersOnPage.info?.count!/20);
              } catch (e) {
                if (e instanceof Error) {
                  error.value = e.message;
                }
              }
          }


 function setLoadingObserver () {
      /* создаём наблюдение */
     loadingObserver.value = new IntersectionObserver( async (entries) => {
        entries.forEach(entry => { /* для каждого элемента */
          if (entry.isIntersecting) { /* если элемент в видимой области браузера */
            fetcherCharacters();
            if (page.value > amountPages.value) { /* если значение страницы уже больше 10 */
              more.value = false;
              return /* и прекращаем выполнение функции */
            }
            page.value+=1;
          }
        })
      });
      /* указываем, что наблюдаем за лоадером */
      if (loader.value) loadingObserver.value.observe(loader.value);
    }

</script>

<template>
    <input v-model="searchParam"/>
      <ul class="cards">
        <router-link v-for="character in characters" :key="character.id" :to="{ name: 'character', params: { id: character.id }}">
          <Card category="preview" :card="character"/>
        </router-link>
      </ul>
      <div v-if="more && !error" ref="loader" class="cards_loading">
        ...Загрузка
      </div>
      <div v-if="error">
        {{ error }}
      </div>
</template>


<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        padding: 10px;
        gap: 10px;
    }

    .cards__card:hover {
        cursor: pointer;
        transition: 0.2s all;
        box-shadow: 0 2px 4px -4px rgba(0, 0, 0, 0.16), 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 10px 18px 8px rgba(0, 0, 0, 0.09);
    }
 

</style>