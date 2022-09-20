import { defineStore } from "pinia";

export const useRoot = defineStore("root", {
  state: () => {
    return {
      name: "root",
      isMobile: window.innerWidth < 768,
    };
  },
});
