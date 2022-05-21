<template>
  <nav>
    <ul>
      <li>
        <a href="#"><img src="@/assets/icone-busca.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="@/assets/icone-folder2.svg" alt="" /></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 10rem;
  min-height: 100vh;
  padding: 4rem 3rem;
  background-color: $color-neutral-light-2;

  & li {
    transition: transform 0.125s;
    
    &:hover {
      transform: scale(1.125);
    }

    &:not(:first-child) {
      margin-top: 7rem;
    }
  }
}
</style>
