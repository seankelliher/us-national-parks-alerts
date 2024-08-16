<script setup>
import { ref, onMounted } from "vue";
import { parks } from "../data/parks-list.js";

let selects = ref([]);

onMounted(() => {
    showParks("A");
    readyClip();
});

function showParks(ltr) {
    selects.value = [];
    parks.map((park) => {
        if (park.fullName.substring(0, 1) === ltr) {
            selects.value.push(park.fullName);
        }
    });
}

// Monitors and copies text to clipboard.
function readyClip() {
    const lookup = document.querySelector(".lookup-results");

    lookup.addEventListener("click", function (event) {
        runClip(event);
    });

    lookup.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            runClip(event);
        }
    });

    // Grouping click & keyup in an array and looping thru it works too.
    // But, if user tabs thru CB icons, text gets copied every tab. Distracting.
    function runClip(event) {
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
    }
}
</script>

<template>
    <div class="lookup">
        <div class="lookup-title">
            <h2>Full list park names</h2>
        </div>
        <!-- No park names begin with Q, U, X -->
        <div class="lookup-nav">
            <span
                @click="showParks('A')"
                @keyup.enter="showParks('A')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                A
            </span>
            <span
                @click="showParks('B')"
                @keyup.enter="showParks('B')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                B
            </span>
            <span
                @click="showParks('C')"
                @keyup.enter="showParks('C')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                C
            </span>
            <span
                @click="showParks('D')"
                @keyup.enter="showParks('D')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                D
            </span>
            <span
                @click="showParks('E')"
                @keyup.enter="showParks('E')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                E
            </span>
            <span
                @click="showParks('F')"
                @keyup.enter="showParks('F')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                F
            </span>
            <span
                @click="showParks('G')"
                @keyup.enter="showParks('G')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                G
            </span>
            <span
                @click="showParks('H')"
                @keyup.enter="showParks('H')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                H
            </span>
            <span
                @click="showParks('I')"
                @keyup.enter="showParks('I')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                I
            </span>
            <span
                @click="showParks('J')"
                @keyup.enter="showParks('J')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                J
            </span>
            <span
                @click="showParks('K')"
                @keyup.enter="showParks('K')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                K
            </span>
            <span
                @click="showParks('L')"
                @keyup.enter="showParks('L')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                L
            </span>
            <span
                @click="showParks('M')"
                @keyup.enter="showParks('M')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                M
            </span>
            <span
                @click="showParks('N')"
                @keyup.enter="showParks('N')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                N
            </span>
            <span
                @click="showParks('O')"
                @keyup.enter="showParks('O')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                O
            </span>
            <span
                @click="showParks('P')"
                @keyup.enter="showParks('P')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                P
            </span>
            <span
                @click="showParks('R')"
                @keyup.enter="showParks('R')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                R
            </span>
            <span
                @click="showParks('S')"
                @keyup.enter="showParks('S')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                S
            </span>
            <span
                @click="showParks('T')"
                @keyup.enter="showParks('T')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                T
            </span>
            <span
                @click="showParks('V')"
                @keyup.enter="showParks('V')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                V
            </span>
            <span
                @click="showParks('W')"
                @keyup.enter="showParks('W')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                W
            </span>
            <span
                @click="showParks('Y')"
                @keyup.enter="showParks('Y')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                Y
            </span>
            <span
                @click="showParks('Z')"
                @keyup.enter="showParks('Z')"
                class="letter"  
                tabindex="0"
                role="button"
            >
                Z
            </span>
        </div>
        <div class="lookup-results" tabindex="0" role="listbox">
            <ul>
                <li v-for="select in selects.sort()" :key="select.index">
                    <span class="copy-name">{{ select }}</span>
                    <img
                        src="/copy-icon-20.svg"
                        alt="copy to clipboard icon"
                        class="copy-icon"
                        tabindex="0"
                        role="button"
                    >
                    <span class="copied">Copied!</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
</style>