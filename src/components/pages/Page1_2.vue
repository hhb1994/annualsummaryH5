<template>
  <div class="map-container">
    <div>
      <div class="site-container">
        <div v-for="(item,index) in animateList2" :key="index" :style="formatStyle(item,index)">
          <img :src="item.url" />
        </div>
      </div>
      <div class="move-container p1"></div>
      <div class="move-container p2"></div>
      <div class="move-container p3"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Page1_2",
  data() {
    return {
      deviceWidth: 0,
      deviceHeight: 0,
      animateList2: [
        { url: require("@/assets/page1_2/putuo.png"), x: 185.4, y: 80.6 },
        { url: require("@/assets/page1_2/liandu.png"), x: 20.8, y: 419.6 },
        { url: require("@/assets/page1_2/yiwu.png"), x: 209.6, y: 349.8 },
        { url: require("@/assets/page1_2/songyang.png"), x: 119, y: 369 },
        { url: require("@/assets/page1_2/kaihua.png"), x: 0, y: 320.4 },
        { url: require("@/assets/page1_2/lishui.png"), x: 106.6, y: 267.6 },
        { url: require("@/assets/page1_2/cangnan.png"), x: 163, y: 439 },
        { url: require("@/assets/page1_2/qingtian.png"), x: 254.8, y: 307.8 },
        { url: require("@/assets/page1_2/yuhang.png"), x: 227.4, y: 199 },
        { url: require("@/assets/page1_2/longquan.png"), x: 103, y: 156.8 }
      ]
    };
  },
  methods: {
    formatStyle(item, index) {
      return `
      top:${(item.y * this.deviceHeight) / 812*1.1}px;
      left:${(item.x * this.deviceWidth) / 375}px;
      opacity: 0;
      width:${this.deviceWidth * 0.3073}px;
      height:${this.deviceWidth * 0.3488}px;
      position: absolute;
      animation: bounceInDown 0.5s ${0.3 + index * 0.2}s forwards;
      `;
    }
  },
  mounted() {
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = window.innerHeight;
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.map-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("./../../assets/page1/zhejiangMap.jpeg");
  background-size: cover;
  & .site-container {
    position: absolute;
    top: 0;
    left: 0;
    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  & .move-container {
    width: 230px;
    height: 27.2vh;
    position: absolute;
    background-size: cover;
    bottom: 6vh;
    animation: move 0.6s infinite step-start forwards, peopleMove 5s linear infinite;
    overflow: hidden;
  }
  & .p1 {
    background-image: url("./../../assets/page1/move2.png");
    left: 0px;
  }
  & .p2 {
    background-image: url("./../../assets/page1/move.png");
    left: -120px;
  }
  & .p3 {
    background-image: url("./../../assets/page1/move3.png");
    left: -240px;
  }
}
</style>