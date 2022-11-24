<template>
  <section class="s-download-cv">
    <div class="wrapper">
      <WritingTitle text="Здравствуйте" />
      <!-- <h2 class="section-title">Здравствуйте_</h2> -->
      <p>
        Я Junior Frontend developer. У меня есть опыт работы, как из офиса так и
        удаленно. Мой стек Vue, Pinia, Vue-router, SCSS, Animations, дополненная
        реальность, JS, HTML, БЭМ. Смогу сверстать лендинг, и приложение с
        логикой/запросами на сервер. Есть некоторая насмотренность в дизайне.
      </p>

      <div class="s-download-cv__btn">
        <a href="" download>Скачать CV</a>
      </div>
    </div>
  </section>
</template>

<script>
import WritingTitle from "@/components/WritingTitle.vue";
export default {
  components: { WritingTitle },
  // setup() {
  //   return {
  //   };
  // },
};
</script>

<style lang="scss">
.s-download-cv {
  border-bottom: 1px solid rgba(#000, 0.1);

  .wrapper {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  h2 {
    margin-bottom: 40px;
  }
}

.s-download-cv__btn {
  position: relative;
  display: flex;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    background-color: rgba(74, 76, 179, 0.95);

    z-index: 1;
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    background-color: hsla(0, 34%, 71%, 0.95);
    transform: translate3d(100%, 0, 0);
    transition: transform 0.3s ease-in;
    z-index: 2;
  }

  &:hover {
    &::after {
      transform: translate3d(0, 0, 0);
    }
  }

  a {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    text-decoration: none;
  }
}
</style>
