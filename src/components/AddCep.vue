<template>
  <form class="cep-form">
    <label for="cep" class="sr-only">Insira um CEP</label>
    <input
      type="tel"
      maxlength="9"
      id="cep"
      name="cep"
      class="cep-form__input"
      placeholder="Insira um CEP (00000-000)"
      v-model="cep"
    />
    <ButtonPrimary class="btn--add-cep" :method="addCep"
      ><span></span> Adicionar CEP</ButtonPrimary
    >
    <transition mode="out-in">
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
      return Object.keys(this.$store.state.ceps);
    },
    cepNumber() {
      return Number(this.cep.replace("-", ""));
    },
  },
  methods: {
    ...mapMutations(["ADD_CEP"]),

    async addCep() {
      if (this.allCeps.length >= 50) {
        this.showMessage("Limite de 50 CEPS atingido");
        return;
      } else if (this.allCeps.includes(this.cep.replace("-", ""))) {
        this.showMessage("CEP já listado");
        return;
      } else if (
        isNaN(this.cep.replace("-", "")) ||
        this.cep.length < 8 ||
        this.cepNumber == 0 ||
        this.cepNumber % 1 !== 0
      ) {
        this.showMessage("Favor inserir um CEP no formato válido");
        return;
      }
      try {
        const res = await fetch(
          `https://viacep.com.br/ws/${this.cepNumber}/json/`
        );
        const data = await res.json();
        if (data.erro) {
          this.showMessage("CEP não encontrado");
          return;
        }
        this.ADD_CEP(data);
      } catch {
        this.showMessage("Favor inserir um CEP no formato válido");
        return;
      } finally {
        this.cep = "";
      }
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

    getLocalStorage() {
      const storedCep = JSON.parse(window.localStorage.getItem("ceps"));
      storedCep.forEach((cep) => {
        this.cep = cep;
        this.addCep();
      });
    },
  },
  created() {
    this.getLocalStorage();
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

      @include screen-large {
        font-size: 1.2rem;
      }
    }

    &:focus {
      border-color: $color-primary-dark-1;
      box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.25);
    }

    @include screen-large {
      max-width: 50%;
      margin-right: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }

  &__message {
    font-size: 1.4rem;
    color: red;
    position: absolute;
    bottom: 5%;
    left: 2%;

    @include screen-large {
      font-size: 1.2rem;
    }

    @include screen-medium {
      bottom: -50%;
    }
  }

  .btn--add-cep {
    @include screen-large {
      margin-right: auto;
    }

    & span {
      display: inline-block;
      content: "";
      width: 2.4rem;
      height: 2.4rem;
      background: url("@/assets/icone-plus.svg") no-repeat center center;
      transition: 0.5s;

      @include screen-large {
        display: none;
      }
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
