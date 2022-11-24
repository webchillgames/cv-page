<template>
  <div class="writing-title">
    <span class="writing-title__char" v-for="(v, i) in text" :key="i">
      {{ v }}
    </span>
    <div class="writing-title__mask" ref="maskRef"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const steps = ref(props.text.length);
    const maskRef = ref();

    let i = 0;
    let step;

    if (window.innerWidth < 767) {
      step = 22;
    } else {
      step = 30;
    }

    function transformMask(step) {
      maskRef.value.style.transform = `translate3d(${step}px, 0, 0)`;
    }

    function transformMaskLoop() {
      i += 1;
      transformMask(i * step);
      setTimeout(() => {
        if (i < steps.value) {
          transformMaskLoop();
        }
      }, getRandomInt());
    }

    function getRandomInt() {
      return Math.floor(Math.random() * 500);
    }

    onMounted(() => {
      transformMaskLoop();
    });

    return {
      maskRef,
    };
  },
};
</script>

<style lang="scss">
.writing-title {
  display: inline-block;
  vertical-align: baseline;
  position: relative;
  padding-right: 10px;
  overflow: hidden;

  &__mask {
    position: absolute;
    top: 0;
    left: 5px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1;
    transition: transform 0.1s ease;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: #f08a5d;
      animation: twinkle 0.7s infinite;
    }
  }

  &__char {
    display: inline-block;
    width: 22px;
    text-align: center;
    font-size: 20px;
    line-height: 36px;
    padding: 0;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      width: 30px;
      font-size: 36px;
      line-height: 42px;
    }
  }
}

.night-theme {
  .writing-title__mask {
    background-color: $night-mode;
  }
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
