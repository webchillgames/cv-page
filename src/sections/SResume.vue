<template>
  <section class="s-resume wrapper">
    <h2>Education and internships</h2>

    <ul>
      <li
        v-for="v in EDUCATION"
        :key="v.id"
        ref="resumeItem"
        class="js-resume-item s-resume__item"
      >
        <div class="s-resume__border"></div>

        <div class="s-resume__content">
          <h3>{{ v.name }}</h3>
          <p class="s-resume__period">{{ v.period }}</p>
          <p class="s-resume__course">{{ v.course }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { EDUCATION } from "@/data.js";
import { useObserver } from "@/composables/useObserver.js";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const resumeItem = ref([]);

    onMounted(() => {
      resumeItem.value.forEach((item) => {
        useObserver(
          item,
          (el) => {
            el.target.classList.add("animated");
          },
          { threshold: 0.2 }
        );

        useObserver(
          item,
          (el) => {
            el.target.firstChild.style.transform = `scale(1)`;
          },
          { threshold: 1 }
        );
      });
    });

    return {
      EDUCATION,
      resumeItem,
    };
  },
};
</script>

<style lang="scss">
.s-resume {
  font-size: 14px;
  line-height: 20px;
  padding-top: 50px;

  ul {
    @include list-reset;
  }

  h2 {
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 700;
    color: $secondary;
    margin: 0;
    margin-bottom: 40px;
  }

  h3 {
    color: #6d56c1;
    text-transform: uppercase;
    margin: 0;
  }

  li {
    position: relative;
    padding-bottom: 40px;
    padding-left: 30px;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 2px solid $accent;
    }
  }

  .s-resume__content {
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.85, 0, 0.15, 1);
  }

  .animated .s-resume__content {
    opacity: 1;
  }

  &__border {
    position: absolute;
    top: 10px;
    left: 5px;
    max-height: 100%;
    bottom: 0;
    width: 2px;
    background-color: $accent;

    transform: scale(0);
    transform-origin: top;
    transition: transform 0.2s ease-in;
  }

  &__period {
    color: $secondary;
    margin-bottom: 10px;
  }

  &__course {
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: $dark-secondary;
  }
}

.night-theme {
  .s-resume__period {
    color: rgba(#fff, 0.7);
  }

  .s-resume__course {
    color: rgba(#fff, 0.9);
  }

  h3 {
    color: $accent;
  }
}
</style>
