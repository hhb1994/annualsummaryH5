<template>
  <div>
    <div class="mapContainer">
      <img class="map" src="@/assets/page1/map.png" />
      <div ref="p1">
        <div class="textContainer1">
          <img
            v-for="(item,index) in animateList1"
            :key="index"
            :src="item.url"
            :style="textStyle1(item,index)"
          />
        </div>
        <div class="textContainer2">
          <img src="@/assets/page1/voice.png" />
        </div>
      </div>
      <div>
        <div class="textContainer3">
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
  </div>
</template>
<script>
export default {
  name: "Page1",
  data() {
    return {
      deviceWidth: 0,
      deviceHeight: 0,
      animateList1: [
        { url: require("@/assets/page1/43.png") },
        { url: require("@/assets/page1/31.png") },
        { url: require("@/assets/page1/7.png") },
        { url: require("@/assets/page1/90.png") }
      ],
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
    textStyle1(item, index) {
      return `animation:bounceInDown 0.5s ${2.8 + index * 0.5}s forwards ease`;
    },
    formatStyle(item, index) {
      return `
      top:${(item.y * this.deviceHeight) / 812}px;
      left:${(item.x * this.deviceWidth) / 375}px;
      opacity: 0;
      width:${(this.deviceWidth * 132) / 1125}px;
      height:${(this.deviceWidth * 84 * 3) / 1335}px;
      position: absolute;
      animation: bounceInDown 0.5s ${5.5 + index * 0.2}s forwards;
      `;
    }
  },
  mounted() {
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = window.innerHeight;
    setTimeout(() => {
      this.$refs.p1.style.display = "none";
    }, 5800);
  }
};
</script>
<style lang="scss" scoped>
.mapContainer {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("./../../assets/page1/zhejiangMap.jpeg");
  background-size: cover;
  & .map {
    width: 230vw;
    background-color: #d2e2ff;
    height: 100%;
    object-fit: contain;
    animation: slidein 3s 1s forwards ease;
  }
  & .textContainer1 {
    position: absolute;
    top: 20.8vh;
    left: 40px;
    height: 29.8vh;
    width: 295px;
    & img {
      opacity: 0;
      height: 25%;
    }
  }
  & .textContainer2 {
    bottom: 0;
    left: 100px;
    width: 204px;
    height: 33.1vh;
    position: absolute;
    opacity: 0;
    animation: bounceInUp 1s ease 4s forwards;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  & .textContainer3 {
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
    width: 200px;
    height: 25.2vh;
    position: absolute;
    background-image: url("./../../assets/page1/move.png");
    background-size: cover;
    opacity: 0;
    animation: move 0.6s infinite step-start forwards, bounceIn 1s 7s forwards, peopleMove 5s linear infinite;
    overflow: hidden;
  }
  & .p1 {
    bottom: 0;
    left: 0px;
  }
  & .p2 {
    bottom: 0;
    left: 100px;
  }
  & .p3 {
    bottom: 0;
    left: 200px;
  }
}
</style>