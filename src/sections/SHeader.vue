<template>
  <section class="s-header">
    <PageSettings />
    <div class="wrapper">
      <div class="s-header__description">
        <div class="s-header__name">
          <div class="s-header__word">
            <span
              class="s-header__char"
              v-for="(j, idx) in t('personal.name').split(' ')[0]"
              :key="idx"
              :style="{
                'transition-delay': `${idx / 50}s`,
              }"
            >
              {{ j }}
            </span>
          </div>
          <div class="s-header__word">
            <span
              class="s-header__char"
              v-for="(v, i) in t('personal.name').split(' ')[1]"
              :key="i"
              :style="{
                'transition-delay': `${i / 50 + 0.08}s`,
              }"
            >
              {{ v }}
            </span>
          </div>
        </div>

        <ul>
          <li v-for="(v, i) in PERSONAL" :key="v.id">
            <span
              class="s-header__line"
              :style="{ 'animation-delay': `${i / 20 + 0.18}s` }"
            >
              <span class="s-header__key">{{ v.type }}: </span>
              <a
                v-if="v.type === 'PHONE'"
                :href="`tel:${v.data}`"
                class="hoverable"
                >{{ v.data }}</a
              >
              <a
                v-else-if="v.type === 'EMAIL'"
                :href="`mailto:${v.data}`"
                class="hoverable"
                >{{ v.data }}</a
              >
              <span v-else class="s-header__value">{{ v.data }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { SOCIALS, PERSONAL } from "@/data.js";
import { t } from "@/js/translate.js";
import PageSettings from "@/components/PageSettings.vue";

export default {
  components: { PageSettings },
  setup() {
    return {
      PERSONAL,
      SOCIALS,
      t,
    };
  },
};
</script>

<style lang="scss">
.s-header {
  overflow: hidden;
  color: #fff;
  background: linear-gradient(
    54deg,
    rgba(74, 76, 179, 0.95) 34%,
    hsla(0, 34%, 71%, 0.95)
  );
  position: relative;
  padding-top: 100px;

  .page-settings {
    position: absolute;
    top: 10px;
    right: 0;
  }

  .wrapper {
    padding-top: 36px;
    padding-bottom: 36px;
  }

  &__key {
    opacity: 0.4;
    width: 30%;
    transition: opacity 0.2s ease-out;
  }

  &__value {
    flex-grow: 1;
  }

  &__name {
    font-size: 44px;
    line-height: 50px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 20px;
    height: 50px;
    display: flex;
  }

  &__char {
    transform: translate3d(0, 105%, 0);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &__word {
    height: 100%;
    overflow: hidden;
    display: flex;
  }

  &__word + .s-header__word {
    margin-left: 8px;
  }

  &__line {
    display: flex;
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  &__description {
    ul {
      @include list-reset;
    }

    li {
      margin-bottom: 16px;

      height: 30px;
      overflow: hidden;

      &:hover {
        .s-header__key {
          opacity: 1;
        }
      }
    }

    .hoverable {
      position: relative;
      display: inline-block;
      vertical-align: baseline;

      &::before {
        position: absolute;
        content: "";
        bottom: -4px;
        left: 0;
        width: 100%;
        background-color: rgba(#fff, 0.5);
        height: 1px;
        transition: transform 0.3s ease-in-out;
        transform: scale(0);
        transform-origin: right;
      }
    }

    .hoverable:hover {
      &::before {
        transform-origin: left;
        transform: scale(1);
      }
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  &.animated {
    .s-header__char,
    .s-header__line {
      transform: translate3d(0, 0, 0);
    }

    .s-header__line {
      animation: slideInDown 0.3s cubic-bezier(0.11, 0, 0.5, 0) 1 forwards;
    }
  }
}

.night-theme {
  .s-header {
    background: linear-gradient(
      112.1deg,
      rgb(32, 38, 57) 11.4%,
      rgb(63, 76, 119) 70.2%
    );
  }
}

@keyframes slideInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  20% {
    opacity: 0.2;
    transform: translate3d(0, -10%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
