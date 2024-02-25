<script setup>
/*defineProps({
    selectedParks: {
        type: Number,
        required: true
    }
});*/
import { store } from "../store.js";
</script>

<template>
    <div
        v-if="store.overviewAlert"
        class="overview-alert"
    >
        <div class="alert-type">
            <div class="badge-big info">
                <h4>Information</h4>
            </div>
        </div>
        <div class="alert-type">
            <div class="badge-big closure">
                <h4>Park Closure</h4>
            </div>
        </div>
        <div class="alert-type">
            <div class="badge-big caution">
                <h4>Caution</h4>
            </div>
        </div>
        <div class="alert-type">
            <div class="badge-big danger">
                <h4>Danger</h4>
            </div>
        </div>
        <div class="alert-text">
            <p>Park alerts are categorized into four types. Park Closures can be for an entire park or part of a park. Caution and Danger are often for weather events such as flooding, storms, landslides, or fires.</p>
        </div>
    </div>
</template>

<style scoped>
</style>