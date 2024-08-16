<script setup>
import { ref, onMounted } from "vue";
import { parks } from "../data/parks-list.js";

let selects = ref([]);

onMounted(() => {
    showParks("A");
    readyClipboard();
});

function showParks(ltr) {
    selects.value = [];
    parks.map((park) => {
        if (park.fullName.substring(0, 1) === ltr) {
            selects.value.push(park.fullName);
        }
    });
}

function readyClipboard() {
    const lookupResults = document.querySelector(".lookup-results");

    lookupResults.addEventListener("click", function (event) {

        if (event.target.className === "copy-icon") {
            const parkName = event.target.previousSibling.textContent;
            const copied = event.target.nextSibling;

            navigator.clipboard.writeText(parkName)
                .then (() => {
                    copied.setAttribute("style", "display: inline-flex");
                    copied.classList.add("fades");
                    setTimeout(() => {
                        copied.classList.remove("fades");
                        copied.removeAttribute("style", "display: inline-flex");
                    }, 1000);
                });
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
                    <span class="copy-name">{{ select }}</span>
                    <img
                        src="/copy-icon-20.svg"
                        alt="copy to clipboard icon"
                        class="copy-icon"
                    >
                    <span class="copied">Copied!</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
</style>