<template>
  <div class="page7-container">
    <div class="board-container">
      <img src="@/assets/page7/board.png" />
    </div>
    <div class="people-container">
      <img src="@/assets/page7/people.png" />
    </div>
    <div ref="c1">
      <div class="title1" :style="formatBounce(1)">
        <img src="@/assets/page7/title1.png" />
      </div>
      <div class="text1" :style="formatBounce(1.5)">
        <img src="@/assets/page7/text1.png" />
      </div>
    </div>
    <div>
      <div class="title2" :style="formatBounce(4)">
        <img src="@/assets/page7/title2.png" />
      </div>
      <div class="text2" :style="formatBounce(4.5)">
        <img src="@/assets/page7/text2.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Page7",
  methods: {
    formatBounce(t) {
      return `animation: bounceIn 1s ${t + 0.2}s forwards`;
    }
  },
  mounted() {
       setTimeout(() => {
      this.$refs.c1.style.display = "none";
    }, 4000);
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.page7-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/utils/bg.png");
  background-size: cover;
  & .people-container {
    position: absolute;
    width: 100%;
    height: 46.4vh;
    left: 0;
    bottom: 4.5vh;
    opacity: 0;
    animation: bounceInUp 1s forwards;
  }
  & .board-container {
    position: absolute;
    height: 51.3vh;
    width: 354px;
    top: 13.4vh;
    left: 10px;
    opacity: 0;
    animation: bounceInDown 1s forwards;
  }
  & .title1,
  .title2 {
    position: absolute;
    top: 18.9vh;
    height: 5.3vh;
    left: 131px;
    width: 101px;
    opacity: 0;
  }
  & .text1,
  .text2 {
    position: absolute;
    top: 25.9vh;
    height: 11vh;
    left: 57px;
    width: 261px;
    opacity: 0;
  }
}
</style>