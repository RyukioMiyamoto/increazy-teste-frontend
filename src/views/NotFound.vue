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

a,
a:visited,
a:link {
  color: $color-neutral-dark-2;
}
</style>
