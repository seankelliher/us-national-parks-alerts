<script setup>
import { store } from "../store.js";
</script>

<template>
    <div
        class="overview-boxes"
        v-if="store.overviewBoxes"
    >
        <div class="overview-about">
            <h2 class="primary-txt">Before you travel</h2>
            <p class="primary-txt">The National Park Service provides alerts on conditions in its over 470 areas in the United States, District of Columbia, and overseas territories - American Samoa, Guam, Northern Mariana Islands, Puerto Rico, the U.S. Minor Outlying Islands, and the U.S. Virgin Islands. Check before you travel.</p>
        </div>

        <div class="overview-alert">
            <div class="alert-text">
                <h2>Alert types</h2>
                <p>Park alerts are categorized into four types. Park Closures can be for an entire park or part of a park. Caution and Danger are often for weather events such as flooding, storms, landslides, or fires.</p>
            </div>

            <div class="overview-alert-type">
                <div class="overview-badge info">
                    <h3>Information</h3>
                </div>
                <div class="overview-badge closure">
                    <h3>Park Closure</h3>
                </div>
                <div class="overview-badge caution">
                    <h3>Caution</h3>
                </div>
                <div class="overview-badge danger">
                    <h3>Danger</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>