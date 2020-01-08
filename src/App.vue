<template>
  <div id="app">
    <div class="mainContainer">
      <Show />
    </div>
  </div>
</template>

<script>
import Show from "./components/Show";
export default {
  name: "app",
  components: {
    Show
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", e => {
        if (window.orientation === 90 || window.orientation === -90) {
          alert("请竖屏观看");
        }
      });
    });
  },
};
</script>
