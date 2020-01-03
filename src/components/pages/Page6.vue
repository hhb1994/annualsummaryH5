<template>
  <div class="page6-container">
    <div class="phone-container">
      <img src="@/assets/page6/phone.png" />
    </div>
    <div class="img-container1">
      <img src="@/assets/page6/oa.png" />
    </div>
    <div class="img-container2">
      <img src="@/assets/page6/icon.png" />
    </div>
    <div class="img-container3">
      <img src="@/assets/utils/logo.png" />
    </div>
    <div class="img-container4">
      <img src="@/assets/page6/hand.png" />
    </div>
    <div class="text-container">
      <div :style="textStyle(index)" class="container" v-for="(item,index) in textUrl" :key="index">
        <img :src="item.url" />
        <div :style="numStyle(item)">
          <p>{{formatNum(item)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from "util";
export default {
  name: "Page6",
  data() {
    return {
      textUrl: [
        { url: require("@/assets/page6/text1.png"), left: 32.73, initVal: 0, procVal: 0, finaVal: 38888 },
        { url: require("@/assets/page6/text2.png"), left: 26.67, procVal: 0, finaVal: 8243 },
        { url: require("@/assets/page6/text3.png"), left: 24.8, procVal: 0, finaVal: 25758 },
        { url: require("@/assets/page6/text4.png"), left: 26.13, procVal: 0, finaVal: 4202 },
        { url: require("@/assets/page6/text5.png"), left: 37.33, procVal: 0, finaVal: 6145 }
      ]
    };
  },
  methods: {
    formatNum(val) {
      let num1 = val.procVal.toFixed(0);
      let zeroLength = String(val.finaVal).length - String(num1).length;
      for (let i = 0; i < zeroLength; i++) {
        num1 += "0";
      }
      return num1;
    },
    textStyle(index) {
      return `animation:bounceIn 1s ${2.3 + index * 0.3}s forwards ease`;
    },
    numStyle(item) {
      return `
      position:absolute;
      top:0.91vh;
      left:${item.left}vw
      `;
    }
  },
  mounted() {
    setTimeout(() => {
      this.textUrl[0].initVal = this.textUrl[0].finaVal;
    }, 3500);
  },
  watch: {
    textUrl: {
      handler: function(newVal) {
        this.textUrl.forEach((item, index) => {
          let newVal2 = newVal[index].finaVal;
          this.$tweenLite.to(this.$data.textUrl[index], 1, { procVal: newVal2 });
        });
      },
      deep: true
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
.page6-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("./../../assets/utils/bg2.png");
  background-size: cover;
  & .phone-container {
    position: absolute;
    width: 348px;
    height: 78.6vh;
    top: 10.75vh;
    left: 12.7px;
    & img {
      object-fit: fill;
    }
  }
  & .img-container1 {
    position: absolute;
    top: 32.3vh;
    left: 61px;
    height: 7.3vh;
    width: 242px;
    animation: fade 1s 2.2s forwards;
  }
  //oa 图标
  & .img-container2 {
    position: absolute;
    top: 44.1vh;
    left: 140px;
    height: 11vh;
    width: 90.3px;
    animation: brighter 1s 2s forwards, fade 1s 2.2s forwards;
  }
  //logo
  & .img-container3 {
    position: absolute;
    left: 90px;
    bottom: 31.6vh;
    height: 3.2vh;
    width: 202px;
    animation: fade 1s 2.2s forwards;
  }
  //手指
  & .img-container4 {
    position: absolute;
    right: -10px;
    bottom: 0;
    height: 29.1vh;
    width: 156px;
    animation: fingermove 1s 1s forwards ease, fade 1s 2.2s forwards;
  }
  & .text-container {
    position: absolute;
    height: 54.6vh;
    width: 288px;
    top: 23.4vh;
    left: 44px;
    & .container {
      height: 20%;
      opacity: 0;
      position: relative;
      & p {
        padding: 1px;
        border-radius: 5px;
        background-color: #0D249E;
        font-family: "ds-digitalbold";
        font-size: 50px;
        color: #ffde00;
      }
    }
  }
}
</style>