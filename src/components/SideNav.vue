<template>
  <nav class="sidenav">
    <ul class="actions">
      <li>
        <a href="#"><img src="@/assets/icone-busca.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="@/assets/icone-folder2.svg" alt="" /></a>
      </li>
    </ul>
    <button class="filter-btn">
      <img src="@/assets/icone-ajuste.svg" alt="" />
    </button>
  </nav>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style lang="scss" scoped>
.sidenav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 4rem 3rem;
  background-color: $color-neutral-light-2;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;

  & li {
    &:hover img {
      transform: scale(1.25);
    }

    &:not(:first-child) {
      margin-top: 7rem;
    }

    & img {
      transition: transform 0.125s;
    }
  }
}
.filter-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 7.5rem;
  background-color: $color-neutral-dark-1;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.25s;

  & img {
    transition: 0.25s;
  }

  &:hover,
  &:focus {
    background-color: rgba($color-neutral-dark-1, 0.75);

    & img {
      transform: scale(1.25);
    }
  }
}
</style>
