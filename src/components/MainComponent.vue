<script setup>
import { ref, watch } from "vue";
import SearchBar from "./SearchBar.vue";
import { parks } from "../data/parks-list.js";
import { store } from "../store.js";

const searchTerm = ref("");
const searchResults = ref([]);
const selectedPark = ref("");
const selectedParkFullName = ref("");
const selectedParkAlerts = ref([]);
const errorMsg = ref("");
const resultsMsg = ref("");

function runSearchTerm() {
    if (searchTerm.value === "") {
        errorMsg.value = "Please enter a search term.";
    } else {
        errorMsg.value = "";
        resultsMsg.value = "";
        selectedPark.value = ""; // In case user selects same park back to back. Watcher needs change to fetch alerts.
        searchResults.value.length = 0;
        parks.map((park)=> {
            if (park.fullName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
                searchResults.value.push(parks.indexOf(park));
            } else if (park.altName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
                searchResults.value.push(parks.indexOf(park));
            }
        });
        store.displayListParks(true);
        store.displayListAlerts(false);
    }
    if (searchResults.value.length === 0 && searchTerm.value !== "") {
        resultsMsg.value = "No results";
    }
}

function clearSearchTerm() {
    errorMsg.value = "";
    resultsMsg.value = "";
    searchTerm.value = "";
    selectedPark.value = "";
    store.displayListParks(false);
    store.displayListAlerts(false);
}

function setSelectedPark(pk) {
    errorMsg.value = ""; // Just in case message present from previous click.
    resultsMsg.value = "Getting alerts from NPS. This may take a minute.";
    selectedPark.value = pk;
}

function setBadgeType(bdg) {
    if (bdg === "Park Closure") {
        return "closure";
    } else if (bdg === "Information") {
        return "info";
    } else if (bdg === "Caution") {
        return "caution";
    } else if (bdg === "Danger") {
        return "danger";
    } else {
        return "general";
    }
}

function setSelectedParkFullName(sp) {
    const selected = document.getElementById(sp);
    const text = selected.textContent;
    selectedParkFullName.value = text;
}

function formatDate(dt) {
    const date = new Date(dt);
    return date.toDateString();
}

watch(selectedPark, (newValue) => {
    if (newValue !== "") {
        // Using locally -> http://localhost:4040/alerts
        // Using remotely -> /alerts
        fetch(`/alerts/${selectedPark.value}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(`Error: ${response.status}. Please try again later.`);
                }
            })
            .then((data) => {
                // console.log(data);
                selectedParkAlerts.value = data;
                resultsMsg.value = `Alerts: ${selectedParkAlerts.value.total} for ${selectedParkFullName.value}`;
            })
            .catch((error) => {
                console.log(error);
                resultsMsg.value = ""; // Removes "loading" message.
                errorMsg.value = error;
            });
    }
});

watch(selectedParkAlerts, () => {
    store.displayListAlerts(true);
});
</script>

<template>
    <SearchBar
        v-model:searchTerm="searchTerm"
        @run-search-term="runSearchTerm"
        @clear-search-term="clearSearchTerm"
    />

    <div class="results-notice">
        <p>{{ resultsMsg }}</p>
        <p class="error-msg">{{ errorMsg }}</p>
    </div>

    <section v-if="store.listParks">
        <dl id="list-of-parks" v-if="searchResults.length !== 0">
            <template v-for="sp in searchResults" :key="parks[sp].parkCode">
                <dd
                    :id="parks[sp].parkCode"
                    tabindex="0"
                    role="button"
                    @click="[
                        setSelectedPark($event.target.id),
                        setSelectedParkFullName($event.target.id),
                    ]"
                    @keyup.enter="[
                        setSelectedPark($event.target.id),
                        setSelectedParkFullName($event.target.id),
                    ]"
                    :class="{selected2: selectedPark === parks[sp].parkCode}"
                >
                    {{ parks[sp].fullName }}
                </dd>
            </template>
        </dl>
    </section>

    <aside>
        <div
            v-if="store.listAlerts"
            class="list-of-alerts"
        >
            <div
                v-for="alert in selectedParkAlerts.data"
                class="alert"
                :key="alert.id"
            >
                <div class="alert-type">
                    <div
                        :class="setBadgeType(alert.category)"
                        class="badge"
                    >
                        <h3>{{ alert.category }}</h3>
                    </div>
                </div>
                <div class="alert-text">
                    <h4>{{ alert.title }}</h4>
                    <p>{{ alert.description }}</p>
                    <p>Issued on: {{ formatDate(alert.lastIndexedDate) }}</p>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
</style>