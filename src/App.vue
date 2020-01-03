<template>
  <div id="app">
    <div class="mainContainer">
      <Show />
      <div class="music-player">
        <MusicPlayer />
      </div>
    </div>
  </div>
</template>

<script>
import Show from "./components/Show";
import MusicPlayer from "./components/MusicPlayer";
export default {
  name: "app",
  components: {
    Show,
    MusicPlayer
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

<style lang="scss" scoped>
.mainContainer {
  position: relative;
  & .music-player {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10000;
  }
}
</style>
