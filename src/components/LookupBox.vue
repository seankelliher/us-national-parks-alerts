<script setup>
import { ref, onMounted } from "vue";
import { parks } from "../data/parks-list.js";

const chosenLetter = ref();

const selects = ref([]);
const chunkedSelects = ref([]);
const currentPage = ref(1);
const totalPages = ref();

onMounted(() => {
    showParks("A");
    readyClipBoard();
});

function showParks(ltr) {
    selects.value = [];
    parks.map((park) => {
        if (park.fullName.substring(0, 1) === ltr) {
            selects.value.push(park.fullName);
        }
    });
    selects.value.sort();
    paginateArray(selects.value, 6, 1);
    chosenLetter.value = ltr;
}

function paginateArray(array, pageSize, pageNumber) {
    // Calculate the starting index of the current page.
    const startIndex = (pageNumber - 1) * pageSize;

    // Calculate total pages.
    totalPages.value = Math.ceil(array.length / pageSize);

    // Create a chunk of the array based on the page size.
    chunkedSelects.value = array.slice(startIndex, startIndex + pageSize);

    // Set current page.
    currentPage.value = pageNumber;

    // return chunkedSelects;
}

// Next page in paginated list.
function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
        paginateArray(selects.value, 6, currentPage.value);
    }
}

// Previous page in paginated list/.
function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value -= 1;
        paginateArray(selects.value, 6, currentPage.value);
    }
}

// Monitors and copies text to clipboard.
function readyClipBoard() {
    const lookup = document.querySelector(".lookup-results");

    lookup.addEventListener("click", function (event) {
        runClipBoard(event);
    });

    lookup.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            runClipBoard(event);
        }
    });

    // Grouping click & keyup in an array and looping thru it works too.
    // But, if user tabs thru CB icons, text gets copied every tab. Distracting.
    function runClipBoard(event) {
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
            <h3>Directory of Parks</h3>
        </div>
        <!-- No park names begin with Q, U, X -->
        <div class="lookup-nav">
            <span
                @click="showParks('A')"
                @keyup.enter="showParks('A')"
                class="letter"
                :class="{selected1: chosenLetter ===  'A'}"
                tabindex="0"
                role="button"
            >
                A
            </span>
            <span
                @click="showParks('B')"
                @keyup.enter="showParks('B')"
                class="letter"
                :class="{selected1: chosenLetter ===  'B'}"
                tabindex="0"
                role="button"
            >
                B
            </span>
            <span
                @click="showParks('C')"
                @keyup.enter="showParks('C')"
                class="letter"
                :class="{selected1: chosenLetter ===  'C'}"
                tabindex="0"
                role="button"
            >
                C
            </span>
            <span
                @click="showParks('D')"
                @keyup.enter="showParks('D')"
                class="letter"
                :class="{selected1: chosenLetter ===  'D'}"
                tabindex="0"
                role="button"
            >
                D
            </span>
            <span
                @click="showParks('E')"
                @keyup.enter="showParks('E')"
                class="letter"
                :class="{selected1: chosenLetter ===  'E'}"
                tabindex="0"
                role="button"
            >
                E
            </span>
            <span
                @click="showParks('F')"
                @keyup.enter="showParks('F')"
                class="letter"
                :class="{selected1: chosenLetter ===  'F'}"
                tabindex="0"
                role="button"
            >
                F
            </span>
            <span
                @click="showParks('G')"
                @keyup.enter="showParks('G')"
                class="letter"
                :class="{selected1: chosenLetter ===  'G'}"
                tabindex="0"
                role="button"
            >
                G
            </span>
            <span
                @click="showParks('H')"
                @keyup.enter="showParks('H')"
                class="letter"
                :class="{selected1: chosenLetter ===  'H'}"
                tabindex="0"
                role="button"
            >
                H
            </span>
            <span
                @click="showParks('I')"
                @keyup.enter="showParks('I')"
                class="letter"
                :class="{selected1: chosenLetter ===  'I'}"
                tabindex="0"
                role="button"
            >
                I
            </span>
            <span
                @click="showParks('J')"
                @keyup.enter="showParks('J')"
                class="letter"
                :class="{selected1: chosenLetter ===  'J'}"
                tabindex="0"
                role="button"
            >
                J
            </span>
            <span
                @click="showParks('K')"
                @keyup.enter="showParks('K')"
                class="letter"
                :class="{selected1: chosenLetter ===  'K'}"
                tabindex="0"
                role="button"
            >
                K
            </span>
            <span
                @click="showParks('L')"
                @keyup.enter="showParks('L')"
                class="letter"
                :class="{selected1: chosenLetter ===  'L'}"
                tabindex="0"
                role="button"
            >
                L
            </span>
            <span
                @click="showParks('M')"
                @keyup.enter="showParks('M')"
                class="letter"
                :class="{selected1: chosenLetter ===  'M'}"
                tabindex="0"
                role="button"
            >
                M
            </span>
            <span
                @click="showParks('N')"
                @keyup.enter="showParks('N')"
                class="letter"
                :class="{selected1: chosenLetter ===  'N'}"
                tabindex="0"
                role="button"
            >
                N
            </span>
            <span
                @click="showParks('O')"
                @keyup.enter="showParks('O')"
                class="letter"
                :class="{selected1: chosenLetter ===  'O'}"
                tabindex="0"
                role="button"
            >
                O
            </span>
            <span
                @click="showParks('P')"
                @keyup.enter="showParks('P')"
                class="letter"
                :class="{selected1: chosenLetter ===  'P'}"
                tabindex="0"
                role="button"
            >
                P
            </span>
            <span
                @click="showParks('R')"
                @keyup.enter="showParks('R')"
                class="letter"
                :class="{selected1: chosenLetter ===  'R'}"
                tabindex="0"
                role="button"
            >
                R
            </span>
            <span
                @click="showParks('S')"
                @keyup.enter="showParks('S')"
                class="letter"
                :class="{selected1: chosenLetter ===  'S'}"
                tabindex="0"
                role="button"
            >
                S
            </span>
            <span
                @click="showParks('T')"
                @keyup.enter="showParks('T')"
                class="letter"
                :class="{selected1: chosenLetter ===  'T'}"
                tabindex="0"
                role="button"
            >
                T
            </span>
            <span
                @click="showParks('V')"
                @keyup.enter="showParks('V')"
                class="letter"
                :class="{selected1: chosenLetter ===  'V'}"
                tabindex="0"
                role="button"
            >
                V
            </span>
            <span
                @click="showParks('W')"
                @keyup.enter="showParks('W')"
                class="letter"
                :class="{selected1: chosenLetter ===  'W'}"
                tabindex="0"
                role="button"
            >
                W
            </span>
            <span
                @click="showParks('Y')"
                @keyup.enter="showParks('Y')"
                class="letter"
                :class="{selected1: chosenLetter ===  'Y'}"
                tabindex="0"
                role="button"
            >
                Y
            </span>
            <span
                @click="showParks('Z')"
                @keyup.enter="showParks('Z')"
                class="letter"
                :class="{selected1: chosenLetter ===  'Z'}"
                tabindex="0"
                role="button"
            >
                Z
            </span>
        </div>
        <div class="lookup-results" role="presentation">
            <ul>
                <li v-for="chunkedSelect in chunkedSelects" :key="chunkedSelect.index">
                    <span class="copy-name">{{ chunkedSelect }}</span>
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
        <div class="paginate-container">
            <p
                @click="prevPage()"
                @keyup.enter="prevPage()"
                class="paginate underline"
                tabindex="0"
                role="button"
            >
                Previous
            </p>
            <p class="paginate">{{ currentPage }} of {{ totalPages }}</p>
            <p
                @click="nextPage()"
                @keyup.enter="nextPage()"
                class="paginate underline"
                tabindex="0"
                role="button"
            >
                Next
            </p>
        </div>
    </div>
</template>

<style scoped>
</style>