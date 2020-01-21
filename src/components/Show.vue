<template>
  <div ref="mySwiper" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <Login @slideNext="slideNext()" />
      </div>
      <div class="swiper-slide">
        <Page1 v-if="pageIndex>0" />
      </div>
      <div class="swiper-slide">
        <Page1_2 v-if="pageIndex>1" />
      </div>
      <div class="swiper-slide">
        <Page2 v-if="pageIndex>2" />
      </div>
      <div class="swiper-slide">
        <Page3 v-if="pageIndex>3" />
      </div>
      <div class="swiper-slide">
        <Page4 v-if="pageIndex>4" />
      </div>
      <div class="swiper-slide">
        <Page5 v-if="pageIndex>5" />
      </div>
      <div class="swiper-slide">
        <Page6 v-if="pageIndex>6" />
      </div>
      <div class="swiper-slide">
        <Page7 v-if="pageIndex>7" />
      </div>
      <div class="swiper-slide">
        <Page8 v-if="pageIndex>8" />
      </div>
      <div class="swiper-slide">
        <Page8_2 v-if="pageIndex>9" />
      </div>
      <div class="swiper-slide">
        <Page9 v-if="pageIndex>10" @showShare="isShareShow=true" />
      </div>
    </div>
    <!-- <div class="swiper-wrapper">
      <div class="swiper-slide">
        <Login @slideNext="slideNext()" />
      </div>
      <div class="swiper-slide">
        <Page1 />
      </div>
      <div class="swiper-slide">
        <Page1_2 />
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
      </div>
      <div class="swiper-slide">
        <Page9 />
      </div>
    </div>-->
    <div v-if="isSildeVisible&& !isLastPage" class="slider">
      <img src="@/assets/utils/slide.png" />
    </div>
    <div class="music-player">
      <MusicPlayer ref="player" />
    </div>
    <Share class="share" :isShareShow="isShareShow" @click.native="hideShare()" />
  </div>
</template>
<script>
import Login from "./pages/Login";
import Page1 from "./pages/Page1";
import Page1_2 from "./pages/Page1_2";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page8_2 from "./pages/Page8_2";
import Page9 from "./pages/Page9";
import Share from "./pages/Share";
import MusicPlayer from "./MusicPlayer";
import Swiper from "swiper";
let vm = null;
export default {
  name: "Show",
  components: {
    Login,
    Page1,
    Page1_2,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page8_2,
    Page9,
    Share,
    MusicPlayer
  },
  data() {
    return {
      isSildeVisible: false,
      isShareShow: false,
      swiper: null,
      isLast: false,
      pageIndex: 0,
      swiperOption: {
        direction: "vertical",
        width: window.innerWidth,
        height: window.innerHeight,
        on: {
          // touchEnd: function() {
          //   if (this.activeIndex == 10 && this.touches.diff < -100 && !vm.isLast) {
          //     vm.isLast = true;
          //     vm.isShareShow = true;
          //   }
          // },
          slideChange: function() {
            if (this.previousIndex == 0) {
              vm.$refs.player.$refs.audioPlayer.play();
            }
          }
        }
      },
      timer: null,
      timeList: [7000, 5000, 5000, 5000, 5000, 5000, 9000, 5000, 5000, 0]
    };
  },
  computed: {
    isLastPage() {
      return this.pageIndex == 11 ? true : false;
    }
  },
  methods: {
    hideShare() {
      this.isShareShow = false;
    },
    slideNext() {
      this.swiper.slideNext();
      this.$refs.player.$refs.audioPlayer.play();
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
    top: 85vh;
    left: 43.5vw;
    width: 13%;
    height: 6vh;
    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      animation: slideMove 2s infinite linear;
    }
  }
  & .share {
    position: absolute;
    top: 0;
    z-index: 100;
  }
  & .music-player {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10000;
  }
}
</style>
