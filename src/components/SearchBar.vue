<script setup>
const searchTerm = defineModel("searchTerm");

defineEmits(["runSearchTerm", "clearSearchTerm"]);
</script>

<template>
    <form @submit.prevent="onSubmit">
        <label for="search-park-name">Find alerts</label>
        <input
            id="search-park-name"
            type="text"
            v-model="searchTerm"
            placeholder="Enter a park name"
        >
        <button
            type="submit"
            @click="$emit('runSearchTerm', searchTerm)"
            class="btn-go"
        >
            Go
        </button>
        <button
            @click="$emit('clearSearchTerm')"
            class="btn-clear"
        >
            Clear
        </button>
    </form>
</template>

<style scoped>
</style>