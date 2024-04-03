<script setup>
import { store } from "../store.js";
</script>

<template>
    <div
        v-if="store.overviewAlert"
        class="overview-alert"
    >
        <div class="alert-text">
            <h2>Alert Types</h2>
            <p>Park alerts are categorized into four types. Park Closures can be for an entire park or part of a park. Caution and Danger are often for weather events such as flooding, storms, landslides, or fires.</p>
        </div>
        <div class="alert-type">
            <div class="badge-big info">
                <h3>Information</h3>
            </div>
        </div>
        <div class="alert-type">
            <div class="badge-big closure">
                <h3>Park Closure</h3>
            </div>
        </div>
        <div class="alert-type">
            <div class="badge-big caution">
                <h3>Caution</h3>
            </div>
        </div>
        <div class="alert-type">
            <div class="badge-big danger">
                <h3>Danger</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>