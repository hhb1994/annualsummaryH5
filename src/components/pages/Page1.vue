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
     
    </div>
  </div>
</template>
<script>
export default {
  name: "Page1",
  data() {
    return {
      animateList1: [
        { url: require("@/assets/page1/1.png") },
        { url: require("@/assets/page1/2.png") },
        { url: require("@/assets/page1/3.png") },
        { url: require("@/assets/page1/4.png") }
      ]
    };
  },
  methods: {
    textStyle1(item, index) {
      return `animation:bounceInDown 1s ${2.8 + index * 0.5}s forwards ease`;
    }
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
    top: 12vh;
    left: 40px;
    height: 29.8vh;
    width: 295px;
    & img {
      opacity: 0;
      height: 25%;
    }
  }
  & .textContainer2 {
    bottom: 12vh;
    left: 45px;
    width: 294px;
    height: 39.1vh;
    position: absolute;
    opacity: 0;
    animation: bounceInUp 1s ease 5s forwards;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  
}
</style>