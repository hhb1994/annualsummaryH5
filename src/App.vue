<template>
  <div id="app">
    <Show />
  </div>
</template>

<script>
import Show from "./components/Show";
export default {
  name: "app",
  components: {
    Show
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(document.body.offsetWidth);
    this.$nextTick(() => {
      // window.addEventListener("touchstart", e => {
      //   console.log(e.touches[0]);
      //   // alert("u just touched me ")
      // });
      // window.addEventListener("touch", e => {
      //   console.log(e);
      //   // alert("u just touched me ")
      // });
      // window.addEventListener("touchend", e => {
      //   console.log(e);
      //   // alert("u just touched me ")
      // });
    });
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  // background-image: url("./assets/zhejiangMap.jpeg");
  // background-repeat: no-repeat;
}
.mapContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  & .map {
    height: 100%;
    object-fit: cover;
    animation-name: slidein;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  & .zhejiangmapContainer {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    & img {
      height: 100%;
      object-fit: cover;
      opacity: 0;
      animation-name: show;
      animation-duration: 1s;
      animation-delay: 2s;
      animation-fill-mode: forwards;
    }
  }

  & .textContainer1 {
    position: absolute;
    top: 150px;
    left: 50px;
    height: 210px;
    width: 120px;
    & img {
      opacity: 0;
      height: 25%;
      object-fit: cover;
    }
  }
  & .textContainer2 {
    position: absolute;
    bottom: 30px;
    left: 0px;
    height: 260px;
    width: 260px;
    & img {
      opacity: 0;
      height: 100%;
      object-fit: cover;
      animation-name: bounceInUp;
      animation-duration: 1s;
      animation-delay: 3s;
      animation-fill-mode: forwards;
    }
  }
}
@keyframes slidein {
  0% {
    transform: translate(0, 0);
  }
  // 30% {
  //   transform:  translate(100px, 100px);
  // }
  // 70% {
  //   transform: scale(15) translate(40px, 45px);
  // }
  40% {
    transform: translate(-400px, -155px);
    opacity: 1;
  }
  100% {
    transform: scale(5) translate(-400px, -155px);
    opacity: 0;
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

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
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
