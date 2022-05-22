<template>
  <section class="list-container">
    <AddCep class="add-cep" />
    <ul class="ceps-list">
      <li v-for="(cep, i) in lista" :key="cep + i" class="ceps-item">
        <div class="ceps-item__icon"></div>
        <p class="ceps-item__cep">
          Cep <span>{{ cep.rua }}</span>
        </p>
        <button class="ceps-item__delete"></button>
      </li>
    </ul>
    <ButtonPrimary class="btn--generate-address">Gerar Endereços</ButtonPrimary>
    <div class="separator"></div>
  </section>
</template>

<script>
import AddCep from "@/components/AddCep";

export default {
  name: "CepList",
  components: {
    AddCep,
  },
  data() {
    return {
      lista: [
        { cep: "cep1", rua: "13100231" },
        { cep: "cep2", rua: "12247060" },
        { cep: "cep3", rua: "12247070" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  @include flexColumn750;
  padding: 4rem 5rem;
}

.add-cep {
  grid-column: 1/-1;
}

.ceps-list {
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  gap: 1.6rem;
  padding-top: 6rem;
  margin-bottom: 5rem;
}

.ceps-item {
  display: flex;
  align-items: center;

  &__icon {
    display: block;
    content: "";
    width: 3.2rem;
    height: 3.2rem;
    background: url("@/assets/icone-lugar.svg") no-repeat center center;
    margin-right: 2.4rem;
  }

  &__cep {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    color: $color-neutral-dark-1;

    & span {
      color: $color-neutral-light-4;
    }
  }
}

.btn--generate-address {
  align-self: flex-end;
}

.separator {
  display: block;
  content: "";
  height: 1px;
  width: 100%;
  background-color: $color-neutral-light-4;
  margin-top: 6rem;
}
</style>
