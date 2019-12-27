<template>
  <div>
    <div class="page2Container">
      <div v-for="(item,index) in animateList" :key="index" :style="formatStyle(item,index)">
        <img src="@/assets/location.png" />
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Page2",
  data() {
    return {
      animateList: [
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
    formatStyle(item, index) {
      return `top:${item.y}px;
      left:${item.x}px;
      opacity: 0;
      width:30px;
      height:60px;
      position: absolute;
      animation-name: bounceInDown;
      animation-duration:1s;
      animation-delay: 0s;
      animation-fill-mode: forwards;
      `;
    }
  }
};
</script>
<style lang="scss">
.page2Container {
  height: 100vh;
  background-image: url("./../../assets/zhejiangMap.jpeg");
  //   background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  & img {
    height: 50%;
    object-fit: cover;
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
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
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
    opacity: 1;
  }
}
</style>