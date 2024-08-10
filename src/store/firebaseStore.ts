import { defineStore } from "pinia";
import { Analytics} from "firebase/analytics";

export const useFirebaseStore = defineStore("firebase", {
  state: () => ({
    analyticsInstance: {} as Analytics,
  }),
});
