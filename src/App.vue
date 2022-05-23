<template>
  <div id="app">
    <MainHeader />
    <SideNav />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import SideNav from "@/components/SideNav";

export default {
  name: "app",
  components: {
    MainHeader,
    SideNav,
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

#app {
  display: grid;
  grid-template-columns: auto 1fr;

  @include screen-medium {
    display: block;
  }
}

.sr-only {
  background-color: red;
  position: absolute;
  top: 1000%;
  right: 1000%;
}

.v-enter-active,
.v-leave-active {
  transition: 0.25s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

@media screen and (prefers-reduced-motion: no-preference) {
  .v-enter {
    transform: translateX(-1rem);
  }

  .v-leave-to {
    transform: translateX(1rem);
  }
}
</style>
