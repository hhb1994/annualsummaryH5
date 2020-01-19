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
    <div class="fire-container1">
      <img src="@/assets/page8/firework1.png" alt />
    </div>
    <div class="fire-container2">
      <img src="@/assets/page8/firework2.png" alt />
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
    top: 30.6vh;
    left: 45.7px;
    height: 14.1vh;
    width: 286px;
    opacity: 0;
    animation: bounceInUp 1s forwards;
  }
  & .text-container2 {
    position: absolute;
    top: 45.6vh;
    left: 40.7px;
    height: 26vh;
    width: 296px;
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
  & .fire-container1 {
    width: 132px;
    height: 132px;
    position: absolute;
    top: 75px;
    left: 0;
    & img {
      opacity: 0;
      width: 100%;
      object-fit: cover;
      animation: zoomIn 1s infinite 1.4s forwards;
    }
  }
  & .fire-container2 {
    width: 127px;
    height: 198px;
    position: absolute;
    top: 60px;
    right: 0;
    & img {
      opacity: 0;
      height: 100%;
      object-fit: cover;
      animation: zoomIn 1s infinite 1.4s forwards;
    }
  }
}
</style>