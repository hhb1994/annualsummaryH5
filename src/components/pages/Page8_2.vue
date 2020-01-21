<template>
  <div class="page8-container">
    <div class="bg-container">
      <img src="@/assets/page8/bg.png" />
    </div>
    <div class="title-container">
      <img src="@/assets/page8_2/title.png" />
    </div>
    <div class="text-container1">
      <img src="@/assets/page8_2/text1.png" />
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
  name: "Page8_2"
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
    left: 83px;
    width: 205px;
    height: 5.3vh;
  }
  & .text-container1 {
    position: absolute;
    top: 35.6vh;
    left: 45.7px;
    height: 18.1vh;
    width: 286px;
    opacity: 0;
    animation: bounceInUp 1s forwards;
  }

  & .dec-container1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 18vh;
    width: 100%;
   
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
   
    & img {
      object-fit: fill;
    }
  }
  & .fire-container1 {
    width: 215px;
    height: 215px;
    position: absolute;
    top: 425px;
    left: -30px;
    & img {
      opacity: 0;
      animation: zoomIn 1s infinite 1.4s forwards;
    }
  }
  & .fire-container2 {
    width: 210px;
    height: 240px;
    position: absolute;
    top: 430px;
    right: -20px;
    & img {
      opacity: 0;
      animation: zoomIn 1s infinite 1.4s forwards;
    }
  }
}
</style>