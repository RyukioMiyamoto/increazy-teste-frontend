<template>
  <form class="cep-form">
    <div>
      <label for="cep" class="sr-only">Insira um CEP</label>
      <input
        type="tel"
        maxlength="8"
        id="cep"
        name="cep"
        class="cep-form__input"
        placeholder="Insira um CEP"
      />
    </div>
    <button type="submit" class="btn-submit">
      <span></span>Adicionar endereço
    </button>
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
  padding: 4rem 5rem;

  &__input {
    width: 29rem;
    padding: 1.5rem;
    border: 0.2rem solid $color-neutral-light-3;
    border-radius: 1rem;
    margin-right: 2.4rem;
    transition: 0.25s;
    overflow: visible;

    &::placeholder {
      color: 75818C;
      font-weight: 400;
    }

    &:focus {
      border-color: $color-primary-dark-1;
      box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.25);
    }
  }
}

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 29rem;
  padding: 1.5rem 3rem;
  background-color: $color-primary-dark-1;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: $color-neutral-light-1;
  cursor: pointer;
  transition: 0.25s;

  &:hover,
  &:focus {
    background-color: rgba($color-primary-dark-1, 0.75);
    transform: translateY(-0.2rem);
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.25);

    & span {
      transform: rotate(180deg) scale(1.325);
    }
  }

  & span {
    display: inline-block;
    content: "";
    width: 2.4rem;
    height: 2.4rem;
    background: url("@/assets/icone-plus.svg") no-repeat center center;
    transition: 0.5s;
  }
}
</style>
