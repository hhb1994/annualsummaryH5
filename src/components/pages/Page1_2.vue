<template>
  <div class="map-container">
    <div>
      <div class="site-container">
        <div v-for="(item,index) in animateList2" :key="index" :style="formatStyle(item,index)">
          <img src="@/assets/page1/location.png" />
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
        { url: require("@/assets/page1/putuo.png"), x: 135.4, y: 134.6 },
        { url: require("@/assets/page1/liandu.png"), x: 34.8, y: 309.6 },
        { url: require("@/assets/page1/yiwu.png"), x: 99.6, y: 349.8 },
        { url: require("@/assets/page1/longquan.png"), x: 103, y: 226.8 },
        { url: require("@/assets/page1/songyang.png"), x: 103.8, y: 439.2 },
        { url: require("@/assets/page1/kaihua.png"), x: 145.2, y: 320.4 },
        { url: require("@/assets/page1/lishui.png"), x: 186.6, y: 237.6 },
        { url: require("@/assets/page1/cangnan.png"), x: 285.2, y: 192 },
        { url: require("@/assets/page1/qingtian.png"), x: 274.8, y: 307.8 },
        { url: require("@/assets/page1/yuhang.png"), x: 227.4, y: 399 }
      ]
    };
  },
  methods: {
    formatStyle(item, index) {
      return `
      top:${((item.y * this.deviceHeight) / 812) * 1.1}px;
      left:${(item.x * this.deviceWidth) / 375}px;
      opacity: 0;
      width:${this.deviceWidth * 0.1573}px;
      height:${this.deviceWidth * 0.1988}px;
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
      height: 50%;
      width: 100%;
      object-fit: contain;
    }
  }
  & .move-container {
    width: 230px;
    height: 27.2vh;
    position: absolute;
    background-image: url("./../../assets/page1/move.png");
    background-size: cover;
    bottom: 6vh;
    animation: move 0.6s infinite step-start forwards, peopleMove 5s linear infinite;
    overflow: hidden;
  }
  & .p1 {
    left: 0px;
  }
  & .p2 {
    left: -120px;
  }
  & .p3 {
    left: -240px;
  }
}
</style>