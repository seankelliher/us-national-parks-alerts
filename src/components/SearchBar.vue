<script setup>
//import { store } from "../store.js";
//const searchTerm = defineModel(store.searchTerm);

// SEE THIS PAGE - https://vuejs.org/guide/essentials/forms.html
// EXPLAINS BINDING SIMPLY.
// https://vuejs.org/guide/components/v-model.html#component-v-model
const searchTerm = defineModel("searchTerm");

defineEmits(["runSearchTerm", "clearSearchTerm", "clearSelectedParks"]);

</script>

<template>
    <form @submit.prevent="onSubmit">
        <label for="search-park-name">Search By Park</label>
        <input
            id="search-park-name"
            type="text"
            v-model="searchTerm"
            placeholder="E.g., Yellowstone"
        >
        <button
            type="submit"
            @click="[
                $emit('clearSelectedParks'),
                $emit('runSearchTerm', searchTerm)
            ]"
            class="btn-go"
        >
            Go
        </button>
        <button
            type="clear"
            @click="$emit('clearSearchTerm')"
            class="btn-clear"
        >
            Clear
        </button>
    </form>
</template>

<style scoped>
</style>
