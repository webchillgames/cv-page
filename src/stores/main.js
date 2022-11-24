import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      appLang: window.localStorage.getItem("app-lang") || "ru",
      appTheme: window.localStorage.getItem("app-theme-mode") || "day",
    };
  },

  actions: {
    changeTheme(anotherTheme) {
      window.localStorage.setItem("app-theme-mode", anotherTheme);
      this.appTheme = window.localStorage.getItem("app-theme-mode");
      location.reload();
    },

    changeLang(anotherLang) {
      window.localStorage.setItem("app-lang", anotherLang);
      this.appLang = window.localStorage.getItem("app-lang");
      location.reload();
    },
  },
});
