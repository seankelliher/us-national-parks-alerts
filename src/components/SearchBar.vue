<script setup>
const searchTerm = defineModel("searchTerm");

defineEmits(["runSearchTerm", "clearSearchTerm"]);
</script>

<template>
    <form @submit.prevent="onSubmit">
        <label for="search-park-name">Find a park</label>
        <input
            id="search-park-name"
            type="text"
            v-model="searchTerm"
            placeholder="Acadia"
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