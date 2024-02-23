<script setup>
import { ref, watch } from "vue";
import SearchBar from "./SearchBar.vue";
import { parks } from "../data/parks-list.js";

const searchTerm = ref("");
const selectedParks = ref([]);
const parkForAlert = ref("");
const parkAlerts = ref([]);
// const badgeType = ref("");

function runSearchTerm() {
    parks.map((park)=> {
        if (park.fullName.toLowerCase().includes(searchTerm.value.toLowerCase())) {
            selectedParks.value.push(parks.indexOf(park));
            console.log(selectedParks);
        }
    });
}

function clearSearchTerm() {
    searchTerm.value = "";
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

</script>

<template>
    <SearchBar
        v-model:searchTerm="searchTerm"
        @run-search-term="runSearchTerm"
        @clear-search-term="clearSearchTerm"
        @clear-selected-parks="clearSelectedParks"
    />

    <section>
        <dl>
            <template v-for="ssp in selectedParks" :key="parks[ssp].parkCode">
                <dd
                    :id="parks[ssp].parkCode"
                    @click="setparkForAlert($event.target.id)"
                >
                    {{ parks[ssp].fullName }}
                </dd>
            </template>
        </dl>
    </section>

    <aside>
        <!-- <pre>{{ parkAlerts }}</pre> -->
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
                <h2>{{ alert.title }}</h2>
                <p>{{ alert.description }}</p>
                <p>Issued on: {{ alert.lastIndexedDate }}</p>
            </div>
        </div>
    </aside>
</template>

<style scoped>
</style>