<template>
  <div class="music-container">
    <img @click="switchMusicStatus()" :class="bindClass" src="@/assets/music/music.png" alt />
    <audio ref="audioPlayer" src=""></audio>
  </div>
</template>
<script>
export default {
  name: "MusicPlayer",
  data() {
    return {
      isMusicEnable: true,
      audioPlayer: null
    };
  },
  computed: {
    bindClass() {
      return this.isMusicEnable ? "music-img rotate" : "music-img";
    }
  },
  methods: {
    switchMusicStatus() {
      let status = this.isMusicEnable;
      this.isMusicEnable = !status;
      if (this.isMusicEnable) {
        this.audioPlayer.play();
      } else {
        this.audioPlayer.pause();
      }
    }
  },
  mounted() {
    this.audioPlayer = this.$refs.audioPlayer;
  }
};
</script>
<style lang="scss" scoped>
.music-container {
  width: 30px;
  height: 30px;
  & .music-img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.rotate {
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