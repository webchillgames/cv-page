<template>
  <div class="main">
    <SHeader ref="headerRef" />
    <SDownloadCV />
    <SResume />
  </div>
</template>

<script>
import SDownloadCV from "@/sections/SDownloadCV.vue";
import SHeader from "@/sections/SHeader.vue";
import SResume from "@/sections/SResume.vue";

import { useObserver } from "@/composables/useObserver.js";
import { onMounted, ref } from "vue";

import { useMainStore } from "@/stores/main.js";

export default {
  components: { SHeader, SDownloadCV, SResume },

  setup() {
    const headerRef = ref();
    const { appTheme } = useMainStore();

    onMounted(() => {
      if (appTheme === "night") {
        document.body.classList.add("night-theme");
      } else {
        document.body.classList.remove("night-theme");
      }

      useObserver(
        headerRef.value.$el,
        (el) => {
          el.target.classList.add("animated");
        },
        { threshold: 0.5 }
      );
    });

    return {
      appTheme,
      headerRef,
      SHeader,
      SDownloadCV,
      SResume,
    };
  },
};
</script>
