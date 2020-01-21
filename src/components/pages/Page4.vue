<template>
  <div class="page4-container">
    <div class="title-contianer">
      <img src="@/assets/page4/title.png" />
    </div>
    <div class="pc-container">
      <img src="@/assets/page4/pc.png" />
    </div>
    <div class="text-container">
      <div class="flex" v-for="(item,index) in textUrl" :key="index">
        <div>
          <img :style="labelStyle(index)" class="label" src="@/assets/utils/label.png" />
        </div>
        <div>
          <img :style="textStyle(index)" class="text" :src="item.url" />
        </div>
      </div>
    </div>
    <div class="bg-container">
      <img src="@/assets/page4/bg.png" />
    </div>
    <div class="p1-container">
      <img src="@/assets/page4/p1.png" />
    </div>

    <div class="p2-container">
      <img src="@/assets/page4/p2.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Page4",
  data() {
    return {
      textUrl: [
        { url: require("@/assets/page4/text1.png") },
        { url: require("@/assets/page4/text2.png") },
        { url: require("@/assets/page4/text3.png") }
      ]
    };
  },
  methods: {
    labelStyle(index) {
      return `animation:bounceIn 1s ${1 + index * 0.3}s forwards ease`;
    },
    textStyle(index) {
      return `animation:bounceIn 1.4s ${1.3 + index * 0.3}s forwards ease`;
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.page4-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/utils/bg.png");
  background-size: cover;
  & .title-contianer {
    position: absolute;
    left: 51px;
    top: 8.6vh;
    width: 260px;
    height: 11.5vh;
    opacity: 0;
    animation: bounceInDown 1s 0.5s ease forwards, tada 1.6s infinite 3s forwards;
  }
  & .pc-container {
    position: absolute;
    left: 36px;
    top: 21.2vh;
    width: 290px;
    height: 29vh;
    & img {
      object-fit: fill;
    }
  }
  & .text-container {
    position: absolute;
    height: 19.2vh;
    width: 250px;
    left: 47px;
    top: 22.3vh;
    & .flex {
      height: 33%;
    }
    & .label {
      opacity: 0;
      width: 25px;
      height: 3vh;
      padding: 6px;
    }
    & .text {
      opacity: 0;
      width: 100%;
    }
  }
  & .p1-container {
    position: absolute;
    height: 37vh;
    width: 172px;
    bottom: 8.8vh;
    left: 0;
    opacity: 0;
    animation: bounceInUp 1s 0.5s ease forwards;
  }
  & .p2-container {
    position: absolute;
    height: 27vh;
    width: 230px;
    bottom: 28vh;
    right: 0;
    opacity: 0;
    animation: bounceInRight 1s 1s ease forwards;
  }
  & .bg-container {
    position: absolute;
    height: 37vh;
    width: 100%;
    bottom: 8.8vh;
    left: 0;
  }
}
</style>