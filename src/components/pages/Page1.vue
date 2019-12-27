<template>
  <div>
    <div class="mapContainer">
      <img class="map" src="@/assets/map.png" />
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
          <img src="@/assets/voice.png" alt />
        </div>
      </div>
      <div ref="p2">
        <div class="textContainer3">
          <div v-for="(item,index) in animateList2" :key="index" :style="formatStyle(item,index)">
            <img src="@/assets/location.png" />
            <img :src="item.url" />
          </div>
        </div>
        <div class="textContainer4" :style="formatStyle2()">
          <div class="img">
            <img class="img1" src="@/assets/laba1.png" />
            <img class="img2" src="@/assets/laba2.png" />
          </div>
        </div>
      </div>
      <div ref="p3">
        <div class="textContainer5">
          <img src="@/assets/flag.png" alt />
        </div>
        <div class="textContainer6">
          <img src="@/assets/people.png" alt />
        </div>
        <div class="textContainer7">
          <img src="@/assets/firework1.png" alt />
        </div>
        <div class="textContainer8">
          <img src="@/assets/firework2.png" alt />
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
        { url: require("@/assets/7.png") },
        { url: require("@/assets/31.png") },
        { url: require("@/assets/43.png") },
        { url: require("@/assets/90.png") }
      ],
      animateList2: [
        { url: require("@/assets/putuo.png"), x: 135.4, y: 134.6 },
        { url: require("@/assets/liandu.png"), x: 34.8, y: 309.6 },
        { url: require("@/assets/yiwu.png"), x: 99.6, y: 349.8 },
        { url: require("@/assets/longquan.png"), x: 103, y: 226.8 },
        { url: require("@/assets/songyang.png"), x: 103.8, y: 439.2 },
        { url: require("@/assets/kaihua.png"), x: 145.2, y: 320.4 },
        { url: require("@/assets/lishui.png"), x: 186.6, y: 237.6 },
        { url: require("@/assets/cangnan.png"), x: 285.2, y: 192 },
        { url: require("@/assets/qingtian.png"), x: 274.8, y: 307.8 },
        { url: require("@/assets/yuhang.png"), x: 227.4, y: 399 }
      ]
    };
  },
  methods: {
    textStyle1(item, index) {
      return `animation:bounceInDown 1s ${3 + index * 0.2}s forwards ease`;
    },
    formatStyle(item, index) {
      return `top:${(item.y * this.deviceHeight) / 812}px;
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
    this.deviceWidth = document.body.offsetWidth;
    this.deviceHeight = document.body.offsetHeight;
    setTimeout(() => {
      this.$refs.p1.style.display = "none";
    }, 7000);
    setTimeout(() => {
      this.$refs.p2.style.display = "none";
    }, 12000);
  }
};
</script>
<style lang="scss" scoped>
$delayForP2: 7s;
$delayForP3: 12s;
.mapContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/zhejiangMap.jpeg");
  background-size: cover;
  & .map {
    background-color: #d2e2ff;
    height: 100%;
    object-fit: cover;
    animation: slidein 4s 1s forwards;
  }

  & .textContainer1 {
    position: absolute;
    top: 130px;
    left: 50px;
    height: 210px;
    width: 120px;
    & img {
      height: 25%;
      object-fit: cover;
    }
  }
  & .textContainer2 {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 300px;
    & img {
      height: 100%;
      width: 100%;
      animation: bounceInUp 1s ease 4s forwards, bounceOutDown 1s ease 6s forwards;
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
        animation: bounceInUp 1s $delayForP2 forwards, flash 1s infinite $delayForP2 forwards;
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
    top: 75px;
    left: 0;
    animation: Expand 2s $delayForP3 forwards;
    overflow: hidden;
    height: 0;
    & img {
      width: 100%;
      object-fit: cover;
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
@keyframes slidein {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(-106vw, 0);
    opacity: 1;
  }
  100% {
    transform: scale(5) translate(-106vw, -19vh);
    opacity: 0;
  }
}

@keyframes addBg {
  from {
    background-color: #d2e2ff;
  }
  to {
    background-image: url("./../../assets/zhejiangMap.jpeg");
    background-size: cover;
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceOutDown {
  0% {
  }
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes Expand {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
</style>