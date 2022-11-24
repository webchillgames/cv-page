<template>
  <div class="page-settings" :class="{ opened: settingsIsOpen }">
    <button
      @click="settingsIsOpen = !settingsIsOpen"
      class="page-settings__toggler"
    >
      open
    </button>

    <div class="page-settings__content">
      <div class="page-settings__item">
        <button @click="setLang('en')" :class="{ active: appLang === 'en' }">
          En
        </button>
        <button @click="setLang('ru')" :class="{ active: appLang === 'ru' }">
          Ru
        </button>
      </div>

      <div class="page-settings__item">
        <button
          @click="setTheme('day')"
          :class="{ active: appTheme === 'day' }"
        >
          day
        </button>
        <button
          @click="setTheme('night')"
          :class="{ active: appTheme === 'night' }"
        >
          night
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { appLang } from "@/js/translate.js";

import { computed, ref } from "vue";

import { useMainStore } from "@/stores/main.js";

export default {
  setup() {
    const settingsIsOpen = ref(false);

    const mainStore = useMainStore();

    const appTheme = computed(() => mainStore.appTheme);

    function setLang(lang) {
      appLang.value = lang;
    }

    function setTheme(type) {
      mainStore.changeTheme(type);
    }

    return {
      appTheme,
      setLang,
      setTheme,
      settingsIsOpen,
      appLang,
    };
  },
};
</script>

<style lang="scss">
.page-settings {
  transform: translate3d(100%, 0, 0);
  position: relative;
  transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);

  &.opened {
    transform: translate3d(0, 0, 0);
  }

  &__content {
    box-shadow: 2px 2px 5px rgb(0 0 0 / 40%);
    border-radius: 8px 0 0 8px;
    overflow: hidden;

    button {
      background-color: transparent;
      border: none;
      height: 50px;
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        background-color: rgba(#fff, 0.1);
      }
    }
  }

  &__toggler {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    border-radius: 8px 0px 0 8px;
    border: none;
    color: #fff;
    background-color: #2d2d2d;
    height: 50px;
    border-left: none;
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &:nth-child(2) {
      border-top: 1px solid rgba(#fff, 0.3);
    }

    & button.active {
      background-color: rgba(#fff, 0.1);
    }
  }

  &__content.animated {
  }
}
</style>
