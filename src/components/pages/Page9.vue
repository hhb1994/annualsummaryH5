<template>
  <div class="page9-container">
    <div class="text-container">
      <img src="@/assets/page9/text.png" alt />
    </div>
    <div class="air-container">
      <img src="@/assets/page9/air.png" alt />
    </div>
    <div class="pic-container">
      <img src="@/assets/page9/img.png" alt />
    </div>
    <div class="text-container2 flex flex-center">
      <div>
        <p>左滑查看更多精彩照片</p>
      </div>
    </div>
    <div class="button-container">
      <img src="@/assets/page9/button.png" @click="showShare()" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Page9",
  methods: {
    showShare() {
      this.$emit("showShare");
    }
  }
};
</script>
<style lang="scss">
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.page9-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/utils/bg3.png");
  background-size: cover;
  & .text-container {
    position: absolute;
    top: 4vh;
    height: 37.4vh;
    width: 342px;
    left: 9px;
    opacity: 0;
    animation: bounceInDown 1s 0.5s forwards;
  }
  & .air-container {
    position: absolute;
    top: 43.8vh;
    height: 6.4vh;
    width: 85px;
    left: 167px;
    opacity: 0;
    animation: bounceIn 1s 1s forwards, fly 5s 2s forwards;
  }
  & .pic-container {
    position: absolute;
    width: 100vw;
    height: 38vh;
    min-height: 270px;
    top: 44.1vh;
    left: 0;
    opacity: 0;
    animation: bounceInUp 1s 1s forwards;
    overflow-x: auto;
    overflow-y: hidden;
    & img {
      height: 100%;
      width: 800vw;
      object-fit: fill;
      // object-fit: contain;
    }
  }
  & .text-container2 {
    position: absolute;
    width: 100%;
    height: 1.84vh;
    left: 0;
    bottom: 57.7vh;
    opacity: 0;
    animation: bounceInDown 1s 1s forwards;
    & p {
      font-size: 8px;
      color: white;
      text-decoration: underline;
      animation: flash 4s infinite linear forwards;
    }
  }

  & .button-container {
    position: absolute;
    bottom: 8vh;
    width: 120px;
    left: 130px;
    opacity: 0;
    animation: bounceInUp 0.1s 1s forwards, tada 1s infinite;
  }
}
</style>