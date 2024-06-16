<script setup>

    defineProps({
        title: String,
        description: String,
        color: String,
        srcImg: {
            type: String,
            required: true,
        },
    })




</script>

<template>
    <div :class="{card}" :style="{'backgroundColor': color}">
        <img class="card__image"  />
        <div class="card__title">
            {{ title }}
        </div>
        <div class="card__description">
            {{ description }}
        </div>
    </div>
</template>


<style>
    .card {
        font-size: 20px;
        font-weight: 800;
        max-width: 300px;
        padding: 40px;
        background-color: rgb(255, 99, 71, 0.3);
    }

    .card__image {
        display: block;
        width: 100%;
        object-fit: cover;
    }

</style>