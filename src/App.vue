<template>
  <div id="app">
    <MainHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";

export default {
  name: "app",
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
@import "@/scss/reset";
@import "@/scss/typography";

body {
  box-sizing: border-box;
  font: 400 1.6rem "Open Sans", sans-serif;
}
</style>
