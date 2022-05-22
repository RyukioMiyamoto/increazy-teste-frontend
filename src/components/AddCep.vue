<template>
  <form class="cep-form">
    <label for="cep" class="sr-only">Insira um CEP</label>
    <input
      type="tel"
      maxlength="8"
      id="cep"
      name="cep"
      class="cep-form__input"
      placeholder="Insira um CEP"
    />
    <ButtonPrimary class="btn--add-cep"
      ><span></span> Adicionar CEP</ButtonPrimary
    >
  </form>
</template>

<script>
export default {
  name: "AddCep",
};
</script>

<style lang="scss" scoped>
.cep-form {
  display: flex;
  justify-content: space-between;

  &__input {
    width: 29rem;
    padding: 1.5rem;
    border: 0.2rem solid $color-neutral-light-3;
    border-radius: 1rem;
    margin-right: 2.4rem;
    transition: 0.25s;
    overflow: visible;

    &::placeholder {
      color: $color-neutral-dark-3;
      font-weight: 400;
    }

    &:focus {
      border-color: $color-primary-dark-1;
      box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.25);
    }
  }

  .btn--add-cep {
    & span {
      display: inline-block;
      content: "";
      width: 2.4rem;
      height: 2.4rem;
      background: url("@/assets/icone-plus.svg") no-repeat center center;
      transition: 0.5s;
    }

    &:hover,
    &:focus {
      & span {
        transform: rotate(180deg) scale(1.325);
      }
    }
  }
}
</style>
