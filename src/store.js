import { reactive } from "vue";

export const store = reactive({
    overviewAbout: true,
    overviewAlert: true,
    listParks: false,
    listAlerts: false,
    modifyOverviewAbout(x) {
        store.overviewAbout = x;
    },
    modifyOverviewAlert(x) {
        store.overviewAlert = x;
    },
    modifyListParks(x) {
        store.listParks = x;
    },
    modifyListAlerts(x) {
        store.listAlerts = x;
    }
});