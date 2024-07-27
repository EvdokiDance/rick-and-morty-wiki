<script setup lang="ts">
 
 import { ref } from 'vue';
import AccordionPanel from './AccordionPanel/AccordionPanel.vue'
import AccordionHeader from './AccordionHeader/AccordionHeader.vue';
import AccordionContent from './AccordionContent/AccordionContent.vue';
import {AccordionItem} from '@/types/types'


 const props = defineProps<{
   items: AccordionItem[],
   setAccordionItem?: (item: any) => void,
 }>()



 
  

 const collapsedItem = ref<{id: number | string | null, isCollapsed: boolean}>()


 const handleCollapse = (e: MouseEvent) => {

   let target = e.target as HTMLElement;


   if (!target.classList.contains('accordion__header')) {
      return;
   }

   target = target.parentElement as HTMLElement;

   if (collapsedItem.value?.id === target.id) {
      collapsedItem.value.isCollapsed = !collapsedItem.value.isCollapsed;
      return;
   }

   collapsedItem.value = {id: target.id, isCollapsed: true};
   
   props.setAccordionItem ? props.setAccordionItem(findByIdItem(target.id).content) : null;

 }


 const findByIdItem = (id: number | string) : AccordionItem => {
   return props.items.filter((item) => item.content.id == id)[0]
 }

</script>

<template>
   <div class="accordion" @click="handleCollapse">
      <AccordionPanel class="accordion__panel" v-for="{id, label, content} in items" :key="id" :id="id">
         <AccordionHeader>
            {{ label }}
         </AccordionHeader>
         <AccordionContent class="accordion__content" :class="{collapsed: collapsedItem?.id == id && collapsedItem?.isCollapsed}">
            <slot :content="content">{{ content }}</slot>
         </AccordionContent>
      </AccordionPanel>
   </div>
</template>


<style scoped>
</style>