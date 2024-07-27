<script setup lang="ts">

import { Character } from '@/types/types';
import {calculateStatus} from '@/helpers/helpers.js';

const props = defineProps<Pick<Character, 'name' | 'status' | 'image'>>()


</script>

<template>
    <div class="card">
        <div class="card__image-wrapper">
            <div class="blacker_blur"></div>
            <img class="card__image"  :src="image"/>
            <div class="card__title">
                {{ name }}
            </div>
        </div>
        <div class="card__description">
            {{ calculateStatus(status) }}
        </div>
    </div>
</template>


<style scoped>


    .card {
        position: relative;
        border-radius: 15px;
        font-size: 20px;
        overflow: hidden;
        color: white;
    }

 
    .card__image-wrapper {
        position: relative;
    }

    .card__image {
        width: 100%;
    }



    .blacker_blur {
        bottom: 0;
        background: linear-gradient(to top, black 15%, transparent 90%);
        opacity: 0.8;
        width: 100%;
        height: 70px;
        position: absolute;
    }
  
    .card__title {
        position: absolute;
        bottom: 15px;
        width: 100%;
        text-align: center;
    }

    .card__description {
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 16px 16px;
        border-left: 1px solid #d8d2d2;
        border-bottom: 1px solid #d8d2d2;
        border-right: 1px solid #d8d2d2;
        color: black;
        overflow: hidden;
        background-color: rgb(255, 255, 255);
 
    }

</style>