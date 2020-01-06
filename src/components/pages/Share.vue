<template>
  <div class="share-container">
    <div class="text-container">
      <img src="@/assets/share/text.png" />
    </div>
    <div class="p-container">
      <img src="@/assets/share/people.png" />
    </div>
    <div class="a-container">
      <img src="@/assets/share/array.png" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.share-container {
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.8);
  overflow: hidden;
  position: relative;
  & .text-container {
    position: absolute;
    top: 3.7vh;
    width: 112px;
    left: 33px;
    height: 47.4vh;
    animation: Scale 1s infinite;
  }
  & .p-container {
    position: absolute;
    top: 17.7vh;
    width: 200px;
    right: 21px;
    height: 26.2vh;
    animation: bounce 1s infinite;
  }
  & .a-container {
    position: absolute;
    top: 1.9vh;
    width: 70.1px;
    right: 16px;
    height: 15.2vh;
    animation: bounce 1s infinite;
  }
}
</style>