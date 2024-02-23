<script setup>
import { states } from "../data/states-list.js";

defineEmits(["sendState"]);
</script>

<template>
    <nav @click="$emit('sendState', event)">
        <div
            v-for="state in states"
            :key="state.abbrev"
            :id="state.abbrev.toLowerCase()"
            class="box"
        >
            <h3>{{ state.abbrev }}</h3>
            <p>{{ state.fullName }}</p>
        </div>
    </nav>
</template>

<style scoped>
</style>