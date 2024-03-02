import { reactive } from "vue";

export const store = reactive({
    overviewAbout: true,
    overviewAlert: true,
    listParks: false,
    listAlerts: false,
    displayOverviewAbout(tf) {
        store.overviewAbout = tf;
    },
    displayOverviewAlert(tf) {
        store.overviewAlert = tf;
    },
    displayListParks(tf) {
        store.listParks = tf;
    },
    displayListAlerts(tf) {
        store.listAlerts = tf;
    }
});