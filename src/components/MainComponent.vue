<script setup>
import { ref, watch } from "vue";
import SearchBar from "./SearchBar.vue";
import OverviewAbout from "./OverviewAbout.vue";
import OverviewAlert from "./OverviewAlert.vue";
import { parks } from "../data/parks-list.js";
import { store } from "../store.js";

const searchTerm = ref("");
const selectedParks = ref([]);
const parkForAlert = ref("");
const parkAlerts = ref([]);
const errorMsg = ref("");

function runSearchTerm() {
    errorMsg.value = "";
    if (searchTerm.value === "") {
        errorMsg.value = "Please enter a search term.";
    } else {
        parks.map((park)=> {
            if (park.fullName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
                selectedParks.value.push(parks.indexOf(park));
            } else if (park.altName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
                selectedParks.value.push(parks.indexOf(park));
            }
        }); 
    }
    store.displayOverviewAbout(false);
    store.displayOverviewAlert(false);
    store.displayListParks(true);
    store.displayListAlerts(false);
}

function clearSearchTerm() {
    errorMsg.value = "";
    searchTerm.value = "";
    store.displayOverviewAbout(true);
    store.displayOverviewAlert(true);
    store.displayListParks(false);
    store.displayListAlerts(false);
}

function clearSelectedParks() {
    selectedParks.value.length = 0;
}

function setparkForAlert(pk) {
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

function highlightSelectedPark() {
    const list = document.getElementById("list-of-parks");
    const descs = list.querySelectorAll("dd");
    descs.forEach(function(desc) {
        if (desc.id === parkForAlert.value) {
            desc.style.backgroundColor = "#d0c4bf"; // neutral 80
        } else {
            desc.style.backgroundColor = "#ede0eb"; // neutral 90
        }
    });
}

function formatDate(dt) {
    const date = new Date(dt);
    return date.toDateString();
}

watch(parkForAlert, () => {
// Using locally -> http://localhost:4040/something
// Using remotely -> /something
    fetch(`http://localhost:4040/alerts/${parkForAlert.value}`)
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
        @clear-selected-parks="clearSelectedParks"
    />

    <section>
        <OverviewAbout />

        <div
            v-if="store.listParks"
            class="list"
        >
        <div class="results-notice">
            <p v-if="selectedParks.length === 0 && searchTerm !== ''">No results.</p>
            <p class="error-msg">{{ errorMsg }}</p>
        </div>
            <dl id="list-of-parks">
                <template v-for="sp in selectedParks" :key="parks[sp].parkCode">
                    <dd
                        :id="parks[sp].parkCode"
                        @click="[
                            setparkForAlert($event.target.id),
                            highlightSelectedPark()
                        ]"
                    >
                        {{ parks[sp].fullName }}
                    </dd>
                </template>
            </dl>
        </div>
    </section>

    <aside>
        <OverviewAlert />

        <div
            v-if="store.listAlerts"
            class="list"
        >
            <div class="results-notice">
                <p>Alerts: {{ parkAlerts.total }}</p>
                <p>{{ errorMsg }}</p>
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
                        <h4>{{ alert.category }}</h4>
                    </div>
                </div>
                <div class="alert-text">
                    <h3>{{ alert.title }}</h3>
                    <p>{{ alert.description }}</p>
                    <p>Issued on: {{ formatDate(alert.lastIndexedDate) }}</p>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
</style>