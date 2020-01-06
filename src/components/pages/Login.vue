<template>
  <div class="loginContainer">
    <div class="main-text">
      <img src="@/assets/page0/main-text.png" />
    </div>
    <div class="login-button" @click="login()">
      <img src="@/assets/page0/button.png" />
    </div>
    <div class="logo">
      <img src="@/assets/utils/logo.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$emit("slideNext");
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.loginContainer {
  width: 100vw;
  height: 100vh;
  background-image: url("./../../assets/page0/bg.png");
  background-size: cover;
  position: relative;
  & .main-text {
    position: absolute;
    top: 5.16vh;
    left: 2px;
    width: 346px;
    height: 82vh;
    // & img{
    //   object-fit: cover
    // }
  }
  & .login-button {
    position: absolute;
    width: 34px;
    height: 140px;
    right: 68px;
    top: 41vh;
    z-index: 1000;
    & img {
      animation: brighter 2s infinite forwards linear;
    }
  }
  & .logo {
    position: absolute;
    left: 90px;
    bottom: 103px;
    height: 27px;
    width: 202px;
  }
}
</style>