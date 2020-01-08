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
  </div>
</template>
<script>
export default {
  name: "Page9"
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
    top: 6vh;
    height: 47.4vh;
    width: 342px;
    left: 9px;
    opacity: 0;
    animation: bounceInDown 1s 0.5s forwards;
  }
  & .air-container {
    position: absolute;
    top: 45.8vh;
    height: 6.4vh;
    width: 85px;
    left: 167px;
    opacity: 0;
    animation: bounceIn 1s 1s forwards, fly 5s 2s forwards;
  }
  & .pic-container {
    position: absolute;
    width: 100vw;
    height: 37vh;
    bottom: 7.1vh;
    left: 0;
    opacity: 0;
    animation: bounceIn 1s 1s forwards;
    overflow-x: auto;
    overflow-y: hidden;
    & img {
      height: 100%;
      width: 800vw;
      object-fit: fill;
      // object-fit: cover;
    }
  }
  & .text-container2 {
    position: absolute;
    width: 100%;
    height: 1.84vh;
    left: 0;
    bottom: 44.7vh;
    opacity: 0;
    animation: bounceIn 1s 1s forwards;
    & p {
      font-size: 6px;
      color: white;
      text-decoration: underline;
      animation: flash 4s infinite linear forwards;
    }
  }
}
</style>