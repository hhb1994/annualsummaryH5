<template>
  <div class="swiper-slide">
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <div>
            <Page1 />
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <div>
            <Page2 />
          </div>
        </swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>-->
      </swiper>
    </div>
  </div>
</template>
<script>
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
export default {
  name: "Show",
  components: {
    Page1,
    Page2
  },
  data() {
    return {
      pageIndex: 0,
      swiperOption: {
        // autoplay: {
        //   delay: 200
        // },
        direction: "vertical",
        width: window.innerWidth,
        height: window.innerHeight,
        on: {
          slideChange: e => {
            alert(e);
            console.log(this.activeIndex);
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="scss">
// .swiper-slide {
//   //   background-image: url("./../assets/zhejiangMap.jpeg")
// }
</style>