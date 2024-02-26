<script setup>
// NEED TO ADD FUNCTIONALITY TO DISPLAY ERROR MESSAGES.
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

function runSearchTerm() {
    parks.map((park)=> {
        if (park.fullName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
            selectedParks.value.push(parks.indexOf(park));
            console.log(selectedParks);
        }
    });
    store.modifyOverviewAbout(false);
    store.modifyOverviewAlert(false);
    store.modifyListParks(true);
    store.modifyListAlerts(false);
}

function clearSearchTerm() {
    searchTerm.value = "";
    store.modifyOverviewAbout(true);
    store.modifyOverviewAlert(true);
    store.modifyListParks(false);
    store.modifyListAlerts(false);
}

function clearSelectedParks() {
    selectedParks.value.length = 0;
}

function setparkForAlert(x) {
    parkForAlert.value = x;
}

function setBadgeType(x) {
    if (x === "Park Closure") {
        return "closure";
    } else if (x === "Information") {
        return "info";
    } else if (x === "Caution") {
        return "caution";
    } else if (x === "Danger") {
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

// DEVELOPING - REMEMBER CORS RESTRICTIONS IN BROWSER.
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
        });
});

watch(parkAlerts, () => {
    store.modifyListAlerts(true);
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
            <p v-if="selectedParks.length === 0"><strong>No results.</strong></p>
        </div>
            <dl id="list-of-parks">
                <template v-for="ssp in selectedParks" :key="parks[ssp].parkCode">
                    <dd
                        :id="parks[ssp].parkCode"
                        @click="[
                            setparkForAlert($event.target.id),
                            highlightSelectedPark()
                        ]"
                    >
                        {{ parks[ssp].fullName }}
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
                <p><strong>Alert<span v-if="parkAlerts.total !== '1'">s</span>: {{ parkAlerts.total }}</strong></p>
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
                    <p>Issued on: {{ alert.lastIndexedDate }}</p>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
</style>