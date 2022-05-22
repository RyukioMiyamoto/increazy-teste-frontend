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
      v-model="cep"
    />
    <ButtonPrimary class="btn--add-cep" :method="addCep"
      ><span></span> Adicionar CEP</ButtonPrimary
    >
    <transition>
      <p class="cep-form__message" v-if="message">{{ message }}</p>
    </transition>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddCep",
  data() {
    return {
      cep: "",
      message: "",
    };
  },
  computed: {
    allCeps() {
      return this.$store.state.ceps;
    },
    cepNumber() {
      return Number(this.cep);
    },
  },

  methods: {
    ...mapMutations(["ADD_CEP"]),

    addCep() {
      if (
        isNaN(this.cep) ||
        this.cepNumber <= 0 ||
        this.cepNumber % 1 !== 0 ||
        this.cepNumber.length < 8
      ) {
        this.showMessage("Insira um CEP em formato válido");
        return;
      } else if (this.allCeps.includes(this.cepNumber)) {
        this.showMessage("CEP já listado");
        return;
      }
      this.ADD_CEP(this.cepNumber);
      this.cep = "";
    },

    showMessage(message) {
      this.message = message;
      document.querySelector("button.btn--add-cep").disabled = true;
      this.cep = "";

      setTimeout(() => {
        this.message = "";
        document.querySelector("button.btn--add-cep").disabled = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.cep-form {
  display: flex;
  justify-content: space-between;
  position: relative;

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

  &__message {
    font-size: 1.4rem;
    color: red;
    position: absolute;
    bottom: 5%;
    left: 5%;
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

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      & span {
        transform: rotate(180deg) scale(1.325);
      }
    }
  }
}
</style>
