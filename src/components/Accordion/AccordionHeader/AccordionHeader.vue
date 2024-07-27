<script setup lang="ts">
</script>

<template>
    <div class="accordion__header">
        <slot></slot>
    </div>
</template>


<style>
    .accordion__header {
        margin-bottom: 7px;
        cursor: pointer;
    }
</style>