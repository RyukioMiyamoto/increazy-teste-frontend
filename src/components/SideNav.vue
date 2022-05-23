<template>
  <nav class="sidenav">
    <ul class="actions">
      <li>
        <a href="#"
          ><img
            src="@/assets/icone-busca.svg"
            alt=""
            aria-hidden="true"
            width="40"
            height="40"
          /><span class="sr-only">Faça uma busca</span>
        </a>
      </li>
      <li>
        <a href="#"
          ><img
            src="@/assets/icone-folder2.svg"
            alt=""
            aria-hidden="true"
            width="40"
            height="40"
          /><span class="sr-only">Acesse os arquivos</span></a
        >
      </li>
    </ul>
    <button class="filter-btn" aria-label="Filtra as listas">
      <img
        src="@/assets/icone-ajuste.svg"
        alt=""
        aria-hidden="true"
        width="40"
        height="40"
      />
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

  @include screen-medium {
    flex-direction: row;
    width: 100vw;
    height: 5rem;
    min-height: initial;
    padding: 1rem;
    position: fixed;
    bottom: 0;
  }
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;

  & li {
    a {
      & img {
        transition: 0.25s;

        @include screen-medium {
          width: 3.2rem;
          height: 3.2rem;
        }
      }

      &:focus > img {
        transform: scale(1.5);

        @include screen-large {
          transform: none;
        }
      }
    }

    &:not(:first-child) {
      margin-top: 7rem;

      @include screen-medium {
        margin: 0 0 0 7rem;
      }
    }
  }

  @include screen-medium {
    flex-direction: row;
    align-items: center;
    width: 100%;
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

  & > img {
    transition: 0.25s;
  }

  &:hover,
  &:focus {
    background-color: rgba($color-neutral-dark-1, 0.75);

    & > img {
      transform: scale(1.5);

      @include screen-large {
        transform: none;
      }
    }
  }

  @include screen-medium {
    width: 3.2rem;
    height: 3.2rem;
  }
}
</style>
