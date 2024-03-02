<script setup>
import { store } from "../store.js";
</script>

<template>
    <div
        v-if="store.overviewAbout"
        class="overview-about"
    >
        <h2>Check Before You Travel</h2>
        <p>The National Park Service provides alerts on its over 470 areas in the United States, District of Columbia, and overseas territories - American Samoa, Guam, Northern Mariana Islands, Puerto Rico, the U.S. Minor Outlying Islands, and the U.S. Virgin Islands.</p>
    </div>
</template>

<style scoped>
</style>