<template>
  <div class="page8-container">
    <div class="bg-container">
      <img src="@/assets/page8/bg.png" />
    </div>
    <div class="title-container">
      <img src="@/assets/page8/title.png" />
    </div>
    <div class="text-container1">
      <img src="@/assets/page8/text1.png" />
    </div>
    <div class="text-container2">
      <img src="@/assets/page8/text2.png" />
    </div>
    <div class="dec-container1">
      <img src="@/assets/page8/dec.png" />
    </div>
    <div class="dec-container2">
      <img src="@/assets/page8/dec.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Page8"
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.page8-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/utils/bg.png");
  background-size: cover;
  & .bg-container {
    top: 13.2vh;
    position: absolute;
    width: 358px;
    height: 65.8vh;
    left: 9px;
    & img {
      object-fit: fill;
    }
  }
  & .title-container {
    position: absolute;
    top: 24vh;
    left: 138px;
    width: 105px;
    height: 5.3vh;
  }
  & .text-container1 {
    position: absolute;
    top: 32.6vh;
    left: 56.7px;
    height: 11.1vh;
    width: 256px;
    opacity: 0;
    animation: bounceInUp 1s forwards;
  }
  & .text-container2 {
    position: absolute;
    top: 47.6vh;
    left: 56.7px;
    height: 18vh;
    width: 256px;
    opacity: 0;
    animation: bounceInUp 1s 0.5s forwards;
  }
  & .dec-container1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 18vh;
    width: 100%;
    // opacity: 0;
    // animation: flash 1s infinite forwards;
    & img {
      object-fit: fill;
    }
  }
  & .dec-container2 {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 18vh;
    width: 100%;
    // opacity: 0;
    // animation: flash 1s infinite forwards;
    & img {
      object-fit: fill;
    }
  }
}
</style>