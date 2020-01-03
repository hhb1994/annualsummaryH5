<template>
  <div class="page2Container">
    <div class="desk">
      <img src="@/assets/page2/desk.png" />
    </div>
    <div class="bg-container">
      <img class="bg" src="@/assets/page2/text-bg.png" />
    </div>
    <div class="title-container">
      <div class="img1">
        <img src="@/assets/page2/array-left.png" />
      </div>
      <div class="img2">
        <img src="@/assets/page2/array-right.png" />
      </div>
      <div class="img3">
        <img src="@/assets/page2/title.png" />
      </div>
    </div>
    <div class="label-container">
      <img class="label" src="@/assets/utils/label.png" />
    </div>
    <div class="label-container2">
      <img class="label" src="@/assets/utils/label.png" />
    </div>
    <div class="text-container">
      <img class="text" src="@/assets/page2/text1.png" />
    </div>
    <div class="text-container2">
      <img class="text" src="@/assets/page2/text2.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Page2",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.page2Container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/utils/bg.png");
  background-size: cover;
  & .desk {
    position: absolute;
    width: 100vw;
    height: 24vh;
    left: 0;
    bottom: 9vh;
    opacity: 0;
    animation: bounceInUp 1s ease forwards;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  & .bg-container {
    position: absolute;
    height: 55vh;
    width: 355px;
    top: 12vh;
    left: 10px;
    & .bg {
      opacity: 0;
      width: 100%;
      height: 100%;
      object-fit: fill;
      animation: bounceInDown 1s 0.5s ease forwards;
    }
  }
  & .title-container {
    & .img1 {
      position: absolute;
      width: 33px;
      height: 5.7vh;
      left: 23px;
      top: 17.8vh;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0;
        animation: bounceInDown 1s 0.5s ease forwards, brighter 1s infinite 1s forwards;
      }
    }
    & .img2 {
      position: absolute;
      width: 33px;
      height: 5.7vh;
      right: 27px;
      top: 28.6vh;
      z-index: 100;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0;
        animation: bounceInDown 1s 0.5s ease forwards, brighter 1s infinite 3s forwards;
      }
    }
    & .img3 {
      position: absolute;
      width: 261px;
      height: 11vh;
      left: 51px;
      top: 20vh;
      z-index: 100;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0;
        animation: bounceInDown 1s 0.5s ease forwards, tada 1.6s infinite 3s forwards;
      }
    }
  }

  & .label-container {
    position: absolute;
    width: 25px;
    height: 3vh;
    left: 38px;
    top: 36vh;
    & .label {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0;
      animation: bounceIn 1s 1s ease forwards;
    }
  }
  & .label-container2 {
    position: absolute;
    width: 25px;
    height: 3vh;
    left: 38px;
    top: 47vh;
    & .label {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0;
      animation: bounceIn 1s 2s ease forwards;
    }
  }
  & .text-container {
    position: absolute;
    width: 271px;
    height: 7.4vh;
    left: 67px;
    top: 36vh;
    & .text {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0;
      animation: bounceIn 1s 1.5s ease forwards;
    }
  }
  & .text-container2 {
    position: absolute;
    width: 271px;
    height: 11.4vh;
    left: 67px;
    top: 47vh;
    & .text {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0;
      animation: bounceIn 1s 2.5s ease forwards;
    }
  }
}
</style>