<script setup lang="ts">
import Container from '../../components/Container/Container.vue';

import CharacterList from '../../components/CharacterList/CharacterList.vue'
import { onMounted, ref, watch } from 'vue';
import { Character } from '@/types/types';
import { getCharactersPerPage } from '@/api/api';

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
     loadingObserver.value = new IntersectionObserver(entries => {
        entries.forEach(entry => { /* для каждого элемента */
          if (entry.isIntersecting) { /* если элемент в видимой области браузера */
             fetcherCharacters()
            if (page.value > amountPages.value) {
              /* если значение страницы уже больше 10 */
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
  <Container>
    <h1 class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png"/>
    </h1>
    <div>
      Поиск по имени <input v-model="searchParam"/>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <CharacterList :characters="characters"/>
      <div v-if="more" ref="loader" class="cards_loading">
          ...Загрузка
      </div>
    </div>

  </Container>
</template>

<style scoped>
.logo {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 20px;
}

</style>
