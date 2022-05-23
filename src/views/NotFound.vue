<template>
  <div>
    <p>Página não encontrada</p>
    <router-link to="/">Volte à aplicação</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15rem;
}

p {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 4.2rem;
  color: $color-neutral-light-4;
  margin-bottom: 1rem;

  @include screen-medium {
    font-size: 2.4rem;
  }
}

a {
  transition: 0.25s;

  &::after {
    display: block;
    content: "";
    height: 0.1rem;
    transform: scaleX(0);
    background-color: currentColor;
    transition: transform 0.25s;
    transform-origin: right;
  }

  a,
  a:visited,
  a:link {
    color: $color-neutral-dark-2;
  }

  &:hover,
  &:focus {
    color: $color-primary-dark-1;
    transform: scale(1.125);

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
</style>
