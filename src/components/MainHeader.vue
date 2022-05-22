<template>
  <header class="header">
    <div class="company">
      <img
        src="@/assets/logo.svg"
        alt=""
        aria-hidden="true"
        class="company__logo"
        width="50"
        height="50"
      />
      <h1 class="company__title">Surreal São Paulo</h1>
      <h2 class="company__subtitle">Vtex</h2>
    </div>
    <div class="user">
      <button
        class="user__notifications"
        aria-label="Checa as notificações do usuário"
      ></button>
      <p class="user__name">Olá, Joaquim</p>
      <img
        src="@/assets/usuario.svg"
        class="user__avatar"
        alt=""
        aria-hidden="true"
        width="54"
        height="54"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss">
.header {
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 1rem 5.6rem 1rem 10rem;
  background-color: $color-primary-dark-1;
  font-weight: 700;
  color: $color-neutral-light-1;
}

.company {
  padding: 1rem 1.5rem;
  width: 29rem;
  height: 5.8rem;
  border: 0.2rem solid $color-neutral-light-1;
  border-radius: 1rem;
  position: relative;

  &__logo {
    position: absolute;
    top: 0;
    left: -7.4rem;
  }

  &__title {
    font-size: 1.6rem;
  }

  &__subtitle {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 400;
  }
}

.user {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  position: relative;

  &__notifications {
    width: 3.2rem;
    height: 3.2rem;
    background: url("@/assets/icone-bell.svg") no-repeat center center;
    margin-right: 3.2rem;
    cursor: pointer;
    transition: transform 0.125s;

    &:hover,
    &:focus {
      transform: scale(1.5);
    }
  }

  &::after {
    display: block;
    content: "";
    width: 0.2rem;
    height: 8rem;
    background-color: rgba($color-neutral-light-1, 0.2);
    position: absolute;
    top: -15%;
    left: 20%;
  }
}
</style>
