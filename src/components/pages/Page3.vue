<template>
  <div class="page3-container">
    <div class="title-contianer">
      <img src="@/assets/page3/title.png" />
    </div>
    <div class="bg-contianer">
      <img src="@/assets/page3/border.png" />
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
    <div class="people-contianer">
      <img src="@/assets/page3/people.png" />
    </div>
    <div class="line-contianer">
      <img src="@/assets/page3/line.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Page3",
  data() {
    return {
      textUrl: [
        { url: require("@/assets/page3/text1.png") },
        { url: require("@/assets/page3/text2.png") },
        { url: require("@/assets/page3/text3.png") },
        { url: require("@/assets/page3/text4.png") }
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
.page3-container {
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
  & .text-container {
    position: absolute;
    height: 24.2vh;
    width: 557px;
    left: 10px;
    top: 24.3vh;
    & .flex {
      height: 25%;
    }
    & .label {
      opacity: 0;
      width: 25px;
      height: 3vh;
      padding: 6px;
    }
    & .text {
      opacity: 0;
      width: 60%;
    }
  }
  & .bg-contianer {
    position: absolute;
    top: 22vh;
    height: 32.4vh;
    width: 368px;
    left: 3px;
    & img {
      object-fit: fill;
    }
  }
  & .people-contianer {
    position: absolute;
    width: 330px;
    height: 43vh;
    left: 20px;
    bottom: 2vh;
  }
  & .line-contianer {
    position: absolute;
    width: 150px;
    height: 1.3vh;
    left: 60px;
    bottom: 40vh;
    opacity: 0;
    animation: bounceIn 1s 1s ease forwards, scan 1.5s infinite 1s forwards ease;
  }
}
</style>