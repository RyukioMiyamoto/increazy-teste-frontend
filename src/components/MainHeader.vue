<template>
  <header class="header">
    <div class="company">
      <router-link to="/">
        <img
          src="@/assets/logo.svg"
          alt=""
          aria-hidden="true"
          class="company__logo"
          width="50"
          height="50"
        />
      </router-link>
      <h1 class="company__title">Surreal São Paulo</h1>
      <h2 class="company__subtitle">Vtex</h2>
    </div>
    <div class="user">
      <router-link
        to="/notfound"
        class="user__notifications"
        aria-label="Checa as notificações do
        usuário"
      ></router-link>
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

  @include screen-medium {
    padding: 1rem;
    justify-content: center;
  }

  @include screen-small {
    padding: 0.5rem;
  }
}

.company {
  padding: 1rem 1.5rem;
  width: 29rem;
  height: 5.8rem;
  border: 0.2rem solid $color-neutral-light-1;
  border-radius: 1rem;
  position: relative;

  @include screen-medium {
    width: 20rem;
  }

  @include screen-small {
    width: 15rem;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    font-size: 1rem;
  }

  &__logo {
    position: absolute;
    top: 0;
    left: -7.4rem;

    @include screen-medium {
      display: none;
    }
  }

  &__title {
    font-size: 1.6rem;

    @include screen-medium {
      font-size: 1.4rem;
    }

    @include screen-small {
      font-size: 1.2rem;
    }
  }

  &__subtitle {
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.02rem;
    font-weight: 400;

    @include screen-medium {
      font-size: 1.2rem;
    }
  }
}

.user {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  position: relative;

  @include screen-small {
    gap: 1rem;
  }

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

      @include screen-large {
        transform: none;
      }
    }

    @include screen-medium {
      margin-right: 0;
    }

    @include screen-small {
      width: 2.4rem;
      height: 2.4rem;
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

    @include screen-medium {
      display: none;
    }
  }

  @include screen-medium {
    font-size: 1.4rem;

    &__avatar {
      display: none;
    }
  }

  @include screen-small {
    font-size: 1.2rem;
  }
}
</style>
