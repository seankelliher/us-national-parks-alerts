<script setup>
import HeaderTitle from "./components/HeaderTitle.vue";
import ImagePano from "./components/ImagePano.vue";
import OverviewBoxes from "./components/OverviewBoxes.vue";
import MainComponent from "./components/MainComponent.vue";
import LookupBox from "./components/LookupBox.vue";
import FooterNotes from "./components/FooterNotes.vue";
</script>

<template>
    <div id="container">
        <HeaderTitle title="National Park Service" />
        <ImagePano />
        <OverviewBoxes />
        <MainComponent />
        <LookupBox />
        <FooterNotes />
    </div>
</template>

<style scoped>
</style>