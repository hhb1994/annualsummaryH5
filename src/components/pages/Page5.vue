<template>
  <div class="page5-container">
    <div class="paper-container">
      <img src="@/assets/page5/paper.png" />
    </div>
    <div class="text-container1">
      <img src="@/assets/page5/text1.png" />
    </div>
    <div class="text-container2">
      <img src="@/assets/page5/text2.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Page5"
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.page5-container {
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  position: relative;
  background-image: url("./../../assets/utils/bg2.png");
  background-size: cover;
  & .paper-container {
    position: absolute;
    height: 76vh;
    width: 100%;
    top: 10.3vh;
    & img {
      object-fit: fill;
    }
  }
  & .text-container1 {
    position: absolute;
    height: 28.7vh;
    width: 319px;
    top: 14.7vh;
    left: 34px;
    opacity: 0;
    animation: bounceInDown 1s 0.5s ease forwards;
  }
  & .text-container2 {
    position: absolute;
    height: 29.8vh;
    width: 339px;
    top: 48.2vh;
    left: 24px;
    opacity: 0;
    animation: bounceInUp 1s 0.5s ease forwards;
  }
}
</style>