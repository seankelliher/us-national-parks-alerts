import { reactive } from "vue";

export const store = reactive({
    overviewBoxes: true,
    listParks: false,
    listAlerts: false,
    displayOverviewBoxes(tf) {
        store.overviewBoxes = tf;
    },
    displayListParks(tf) {
        store.listParks = tf;
    },
    displayListAlerts(tf) {
        store.listAlerts = tf;
    }
});