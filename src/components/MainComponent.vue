<script setup>
import { ref, watch } from "vue";
import SearchBar from "./SearchBar.vue";
import { parks } from "../data/parks-list.js";
import { store } from "../store.js";

const searchTerm = ref("");
const selectedParks = ref([]);
const parkForAlert = ref("");
const parkForAlertFullName = ref("");
const parkAlerts = ref([]);
const errorMsg = ref("");

function runSearchTerm() {
    if (searchTerm.value === "") {
        errorMsg.value = "Please enter a search term.";
    } else {
        errorMsg.value = "";
        parkForAlert.value = ""; // Allows alerts if user runs search & clicks park, then runs search and clicks same park again - back to back.
        selectedParks.value.length = 0;
        parks.map((park)=> {
            if (park.fullName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
                selectedParks.value.push(parks.indexOf(park));
            } else if (park.altName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
                selectedParks.value.push(parks.indexOf(park));
            }
        });
        store.displayListParks(true);
        store.displayListAlerts(false);
    }
}

function clearSearchTerm() {
    errorMsg.value = "";
    searchTerm.value = "";
    parkForAlert.value = "";
    store.displayListParks(false);
    store.displayListAlerts(false);
}

function clearErrorMsg() {
    errorMsg.value = "";
}

function setParkForAlert(pk) {
    parkForAlert.value = pk;
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

function setParkForAlertFullName(sp) {
    const selected = document.getElementById(sp);
    const text = selected.textContent;
    parkForAlertFullName.value = text;
}

function formatDate(dt) {
    const date = new Date(dt);
    return date.toDateString();
}

watch(parkForAlert, (newValue) => {
    if (newValue !== "") {
        // Using locally -> http://localhost:4040/alerts
        // Using remotely -> /alerts
        fetch(`/alerts/${parkForAlert.value}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(`Error: ${response.status}. Please try again later.`);
                }
            })
            .then((data) => {
                console.log(data);
                parkAlerts.value = data;
            })
            .catch((error) => {
                console.log(error);
                errorMsg.value = error;
            });
    }
});

watch(parkAlerts, () => {
    store.displayListAlerts(true);
});
</script>

<template>
    <SearchBar
        v-model:searchTerm="searchTerm"
        @run-search-term="runSearchTerm"
        @clear-search-term="clearSearchTerm"
    />

    <section v-if="store.listParks">
        <div class="results-notice">
            <p v-if="selectedParks.length === 0 && searchTerm !== ''">No results.</p>
            <p class="error-msg">{{ errorMsg }}</p>
        </div>
        <dl id="list-of-parks" v-if="selectedParks.length !== 0">
            <template v-for="sp in selectedParks" :key="parks[sp].parkCode">
                <dd
                    :id="parks[sp].parkCode"
                    tabindex="0"
                    role="button"
                    @click="[
                        setParkForAlert($event.target.id),
                        setParkForAlertFullName($event.target.id),
                        clearErrorMsg()
                    ]"
                    @keyup.enter="[
                        setParkForAlert($event.target.id),
                        setParkForAlertFullName($event.target.id),
                        clearErrorMsg()
                    ]"
                    :class="{selected2: parkForAlert === parks[sp].parkCode}"
                >
                    {{ parks[sp].fullName }}
                </dd>
            </template>
        </dl>
    </section>

    <aside>
        <div
            v-if="store.listAlerts"
            class="list"
        >
            <div class="results-notice">
                <p>Alerts: {{ parkAlerts.total }} for {{ parkForAlertFullName }}</p>
            </div>
            <div
                v-for="alert in parkAlerts.data"
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