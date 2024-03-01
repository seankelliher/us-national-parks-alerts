<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>

<template>
    <header>
        <figure class="logo">
            <img src="/national-park-service-logo.svg" alt="National Park Service logo">
            <figcaption hidden>National Park Service logo</figcaption>
        </figure>
        <h1>{{ title }}</h1>
    </header>
</template>

<style scoped>
</style>