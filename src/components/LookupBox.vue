<script setup>
import { ref, onMounted } from "vue";
import { parks } from "../data/parks-list.js";
// import { store } from "../store.js";

let selects = ref([]);

onMounted(() => {
    showParks("A");
});

function showParks(ltr) {
    selects.value = [];
    parks.map((park) => {
        if (park.fullName.substring(0, 1) === ltr) {
            selects.value.push(park.fullName);
        }
    });
}
</script>

<template>
    <div class="lookup">
        <div class="lookup-title">
            <h2>Full list park names</h2>
        </div>
        <!-- No park names begin with Q, U, X -->
        <div class="lookup-nav">
            <span @click="showParks('A')" class="letter">A</span>
            <span @click="showParks('B')" class="letter">B</span>
            <span @click="showParks('C')" class="letter">C</span>
            <span @click="showParks('D')" class="letter">D</span>
            <span @click="showParks('E')" class="letter">E</span>
            <span @click="showParks('F')" class="letter">F</span>
            <span @click="showParks('G')" class="letter">G</span>
            <span @click="showParks('H')" class="letter">H</span>
            <span @click="showParks('I')" class="letter">I</span>
            <span @click="showParks('J')" class="letter">J</span>
            <span @click="showParks('K')" class="letter">K</span>
            <span @click="showParks('L')" class="letter">L</span>
            <span @click="showParks('M')" class="letter">M</span>
            <span @click="showParks('N')" class="letter">N</span>
            <span @click="showParks('O')" class="letter">O</span>
            <span @click="showParks('P')" class="letter">P</span>
            <span @click="showParks('R')" class="letter">R</span>
            <span @click="showParks('S')" class="letter">S</span>
            <span @click="showParks('T')" class="letter">T</span>
            <span @click="showParks('V')" class="letter">V</span>
            <span @click="showParks('W')" class="letter">W</span>
            <span @click="showParks('Y')" class="letter">Y</span>
            <span @click="showParks('Z')" class="letter">Z</span>
        </div>
        <div class="lookup-results">
            <ul>
                <li v-for="select in selects.sort()" :key="select.index">
                    {{ select }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
</style>