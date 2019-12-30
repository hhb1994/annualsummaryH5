<template>
  <div>
    <img @click="switchMusicStatus()" class="music-img" :src="musicImgUrl" alt />
  </div>
</template>
<script>
export default {
  name: "MusicPlayer",
  data() {
    return {
      isMusicEnable: true
    };
  },
  computed: {
    musicImgUrl() {
      return this.isMusicEnable ? require("./../assets/music.png") : require("./../assets/music_disable.png");
    }
  },
  methods: {
    switchMusicStatus() {
      let status = this.isMusicEnable;
      this.isMusicEnable = !status;
    }
  }
};
</script>
<style lang="scss" scoped>
.music-img {
  animation: Rorate 2s infinite forwards linear;
}
@keyframes Rorate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>