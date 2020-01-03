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
          <img src="@/assets/page1/voice.png" alt />
        </div>
      </div>
      <div ref="p2">
        <div class="textContainer3">
          <div v-for="(item,index) in animateList2" :key="index" :style="formatStyle(item,index)">
            <img src="@/assets/page1/location.png" />
            <img :src="item.url" />
          </div>
        </div>
        <div class="textContainer4" :style="formatStyle2()">
          <div class="img">
            <img class="img1" src="@/assets/page1/laba1.png" />
            <img class="img2" src="@/assets/page1/laba2.png" />
          </div>
        </div>
      </div>
      <div ref="p3">
        <div class="textContainer5">
          <img src="@/assets/page1/flag.png" alt />
        </div>
        <div class="textContainer6">
          <img src="@/assets/page1/people.png" alt />
        </div>
        <div class="textContainer7">
          <img src="@/assets/page1/firework1.png" alt />
        </div>
        <div class="textContainer8">
          <img src="@/assets/page1/firework2.png" alt />
        </div>
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
      return `animation:bounceInDown 1s ${3 + index * 0.2}s forwards ease`;
    },
    formatStyle(item, index) {
      return `
      top:${(item.y * this.deviceHeight) / 812}px;
      left:${(item.x * this.deviceWidth) / 375}px;
      opacity: 0;
      height:${(this.deviceWidth * 84 * 3) / 1335}px;
      position: absolute;
      animation: bounceInDown 1s ${7 + index * 0.2}s forwards;
      `;
    },
    formatStyle2() {}
  },
  mounted() {
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = window.innerHeight;
    setTimeout(() => {
      this.$refs.p1.style.display = "none";
    }, 7000);
    setTimeout(() => {
      this.$refs.p2.style.display = "none";
    }, 12000);
  }
};
</script>
<style lang="scss">
$delayForP2: 7s;
$delayForP3: 12s;
.mapContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/page1/zhejiangMap.jpeg");
  background-size: cover;
  & .map {
    background-color: #d2e2ff;
    height: 100%;
    object-fit: cover;
    animation: slidein 4s 1s forwards ease;
  }

  & .textContainer1 {
    position: absolute;
    top: 20.8vh;
    left: 39px;
    height: 29.8vh;
    width: 295px;
    & img {
      opacity: 0;
      height: 25%;
      
      object-fit: fill;
    }
  }
  & .textContainer2 {
    position: absolute;
    bottom: 6.5vh;
    left: 73px;
    width: 240px;
    height: 40.5vh;
    & img {
      opacity: 0;
      height: 100%;
      width: 100%;
      object-fit: fill;
      animation: bounceInUp 1s ease 4s forwards;
    }
  }
  & .textContainer3 {
    position: absolute;
    top: 0;
    left: 0;
    & img {
      height: 50%;
      object-fit: cover;
    }
  }
  & .textContainer4 {
    width: 204px;
    height: 270px;
    position: absolute;
    bottom: 0px;
    right: 0;
    & .img {
      position: relative;
      & .img1 {
        opacity: 0;
        width: 20px;
        position: absolute;
        top: 0;
        left: 0;
        animation: bounceInUp 1s $delayForP2 forwards, zoomIn 1s infinite $delayForP2 forwards;
      }
      & .img2 {
        opacity: 0;
        width: 160px;
        position: absolute;
        top: 5px;
        right: 0px;
        animation: bounceInUp 1s $delayForP2 forwards;
      }
    }
  }
  & .textContainer5 {
    position: absolute;
    top: 35px;
    left: 0;
    width: 100vw;
    height: 0;
    animation: Expand 0.3s $delayForP3 forwards ease;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  & .textContainer6 {
    position: absolute;
    bottom: -10px;
    left: 0;
    & img {
      opacity: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation-name: bounceInUp;
      animation-duration: 1s;
      animation-delay: $delayForP3;
      animation-fill-mode: forwards;
    }
  }
  & .textContainer7 {
    width: 132px;
    height: 132px;
    position: absolute;
    top: 75px;
    left: 0;
    & img {
      opacity: 0;
      width: 100%;
      object-fit: cover;
      animation: zoomIn 1s infinite $delayForP3 forwards;
    }
  }
  & .textContainer8 {
    width: 127px;
    height: 198px;
    position: absolute;
    top: 60px;
    right: 0;
    & img {
      opacity: 0;
      height: 100%;
      object-fit: cover;
      animation: zoomIn 1s infinite $delayForP3 forwards;
    }
  }
}



</style>