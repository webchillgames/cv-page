import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      appTheme: window.localStorage.getItem("app-theme-mode") || "day",
    };
  },

  actions: {
    changeTheme(anotherTheme) {
      window.localStorage.setItem("app-theme-mode", anotherTheme);
      this.appTheme = window.localStorage.getItem("app-theme-mode");
      location.reload();
    },
  },
});
