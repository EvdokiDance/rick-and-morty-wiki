<script setup lang="ts">
   

</script>

<template>
    <div class="accordion__content">
        <div class="accordion__wrapper">
                        <slot></slot>
        </div>
    </div>
</template>


<style scoped>
       .accordion__content {
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-start;
            overflow: hidden auto;
            transition: max-height 0.5s linear 0ms;
            max-height: 0;
            box-sizing: border-box;
        }

    .collapsed {
        max-height: 500px;
    }

    .accordion__wrapper {
        flex-grow: 1;
        border-radius: 4px;
        background-color: white;
        color: black;
        padding: 16px;
    }
</style>