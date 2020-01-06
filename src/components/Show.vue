<template>
  <div ref="mySwiper" class="swiper-container">
    <!-- <div class="swiper-wrapper">
      <div class="swiper-slide">
        <Login @slideNext="slideNext()" />
      </div>
      <div class="swiper-slide">
        <Page1 v-if="pageIndex>0" />
      </div>
      <div class="swiper-slide">
        <Page2 v-if="pageIndex>1" />
      </div>
      <div class="swiper-slide">
        <Page3 v-if="pageIndex>2" />
      </div>
      <div class="swiper-slide">
        <Page4 v-if="pageIndex>3" />
      </div>
      <div class="swiper-slide">
        <Page5 v-if="pageIndex>4" />
      </div>
      <div class="swiper-slide">
        <Page6 v-if="pageIndex>5" />
      </div>
      <div class="swiper-slide">
        <Page7 v-if="pageIndex>6" />
      </div>
      <div class="swiper-slide">
        <Page8 v-if="pageIndex>7" />
      </div>
      <div class="swiper-slide">
        <Page9 v-if="pageIndex>8" />
      </div>
    </div> -->
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide">
        <Login @slideNext="slideNext()" />
      </div>
      <div class="swiper-slide">
        <Page1 />
      </div>
      <div class="swiper-slide">
        <Page2 />
      </div>
      <div class="swiper-slide">
        <Page3 />
      </div>
      <div class="swiper-slide">
        <Page4 />
      </div>
      <div class="swiper-slide">
        <Page5 />
      </div>
      <div class="swiper-slide">
        <Page6 />
      </div>
      <div class="swiper-slide">
        <Page7 />
      </div>
      <div class="swiper-slide">
        <Page8 />
      </div> -->
      <div class="swiper-slide">
        <Page9 />
      </div>
    </div>
    <div v-if="isSildeVisible" class="slider">
      <img src="@/assets/utils/slide.png" />
    </div>
    <div v-if="isShareShow" class="share" @click="hideShare()">
      <Share />
    </div>
  </div>
</template>
<script>
import Login from "./pages/Login";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Share from "./pages/Share";
import Swiper from "swiper";
let vm = null;
export default {
  name: "Show",
  components: {
    Login,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Share
  },
  data() {
    return {
      isSildeVisible: false,
      isShareShow: false,
      swiper: null,
      pageIndex: 0,
      swiperOption: {
        direction: "vertical",
        width: window.innerWidth,
        height: window.innerHeight,
        on: {
          touchEnd: function() {
            if (this.activeIndex == 9 && this.touches.diff < 0) {
              vm.isShareShow = true;
            }
          }
        }
      },
      timer: null,
      timeList: [9000, 5000, 5000, 5000, 5000, 9000, 5000, 0]
    };
  },
  computed: {},
  methods: {
    hideShare() {
      this.isShareShow = false;
    },
    slideNext() {
      this.swiper.slideNext();
    }
  },
  mounted() {
    let swiperContainer = this.$refs.mySwiper;
    this.swiper = new Swiper(swiperContainer, this.swiperOption);
  },
  created() {
    vm = this;
  },
  watch: {
    "swiper.activeIndex": function(newVal, oldVal) {
      if (oldVal != null && newVal > this.pageIndex) {
        this.pageIndex++;
        this.isSildeVisible = false;
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = setTimeout(() => {
          this.isSildeVisible = true;
          clearTimeout(this.timer);
          this.timer = null;
        }, this.timeList[newVal - 1]);
      }
    }
  }
};
</script>
<style lang="scss">
.swiper-container {
  position: relative;
  & .slider {
    z-index: 100;
    position: absolute;
    top: 80vh;
    left: 40vw;
    width: 20%;
    height: 6vh;
    & img {
      height: 100%;
      width: 100%;
      object-fit: fill;
      animation: flash 2s infinite;
    }
  }
  & .share {
    position: absolute;
    top: 0;
    z-index: 100;
  }
}
</style>
