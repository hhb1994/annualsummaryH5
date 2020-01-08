<template>
  <div class="music-container">
    <img @click="switchMusicStatus()" :class="bindClass" src="@/assets/music/music.png" alt />
    <audio loop ref="audioPlayer" src="@/assets/music/main.mp3"></audio>
  </div>
</template>
<script>
export default {
  name: "MusicPlayer",
  data() {
    return {
      audioPlayer: null,
      isPlaying: false
    };
  },
  computed: {
    bindClass() {
      return this.isPlaying ? "music-img rotate" : "music-img";
    }
  },
  methods: {
    switchMusicStatus() {
      if (this.audioPlayer.paused) {
        this.audioPlayer.play();
      } else {
        this.audioPlayer.pause();
      }
    }
  },
  mounted() {
    this.audioPlayer = this.$refs.audioPlayer;
    this.$nextTick(() => {
      this.audioPlayer.addEventListener("play", () => {
        this.isPlaying = true;
      });
      this.audioPlayer.addEventListener("pause", () => {
        this.isPlaying = false;
      });
    });
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