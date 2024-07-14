<script setup>
import HeaderTitle from "./components/HeaderTitle.vue";
import ImagePano from "./components/ImagePano.vue";
import OverviewBoxes from "./components/OverviewBoxes.vue";
import MainComponent from "./components/MainComponent.vue";
</script>

<template>
    <div id="container">
        <HeaderTitle title="National Park Service" />
        <ImagePano />
        <MainComponent />
        <OverviewBoxes />
    </div>
</template>

<style scoped>
</style>