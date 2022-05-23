<template>
  <section class="list-container">
    <AddCep class="add-cep" />
    <transition-group tag="ul" class="ceps-list">
      <li
        v-for="(cep, i) in this.$store.state.ceps"
        :key="cep + i"
        class="ceps-item"
        role="listitem"
      >
        <div>
          <img
            src="@/assets/icone-lugar.svg"
            alt=""
            class="ceps-item__icon"
            aria-hidden="true"
          />
        </div>
        <p class="ceps-item__cep">
          Cep <span>{{ cep.cep }}</span>
        </p>
        <button
          class="ceps-item__delete"
          @click="deleteCepAndAddress(cep)"
          aria-label="Apaga o CEP listado"
        >
          x
        </button>
      </li>
    </transition-group>
    <div class="btn--generate-address">
      <ButtonPrimary
        :method="addAddress"
        id="btn--generate-address"
        ariaLabel="Gera uma lista de endereços"
        >Gerar Endereços</ButtonPrimary
      >
      <transition>
        <p class="no-cep" v-if="noCep">{{ noCep }}</p>
      </transition>
    </div>
    <div class="separator"></div>
  </section>
</template>

<script>
import AddCep from "@/components/AddCep";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "CepList",
  components: {
    AddCep,
  },
  data() {
    return {
      message: "",
      noCep: "",
    };
  },
  computed: {
    allCeps() {
      return Object.values(this.$store.state.ceps);
    },
  },
  methods: {
    ...mapActions(["deleteCepAndAddress"]),

    ...mapMutations(["ADD_ADDRESS", "REMOVE_CEP"]),

    addAddress() {
      if (this.allCeps.length === 0) {
        this.noCep = "Nenhum CEP listado";
        document.getElementById("btn--generate-address").disabled = true;

        setTimeout(() => {
          this.noCep = "";
          document.getElementById("btn--generate-address").disabled = false;
          return;
        }, 1000);
      }
      this.allCeps.forEach((cep) => {
        this.ADD_ADDRESS(cep);
      });
    },

    removeCep(cep) {
      this.REMOVE_CEP(cep);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  @include flexColumn750;
  padding: 4rem 5rem;

  @include screen-large {
    max-width: 65rem;
    padding: 3rem;
    margin: 0 auto;
  }

  @include screen-small {
    max-width: 28rem;
    padding: 1rem;
  }
}

.ceps-list {
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  gap: 1.6rem;
  padding-top: 6rem;
  margin-bottom: 5rem;

  @include screen-large {
    align-self: center;
  }
}

.ceps-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;

  &__icon {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 2.4rem;

    @include screen-small {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  &__cep {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    color: $color-neutral-dark-1;

    & span {
      color: $color-neutral-light-4;
    }

    @include screen-medium {
      font-size: 1.6rem;
    }

    @include screen-small {
      font-size: 1.4rem;
    }
  }

  &__delete {
    font-size: 2rem;
    font-weight: 700;
    color: $color-neutral-light-4;
    cursor: pointer;
    margin-left: 2.4rem;
    transition: 0.25s;

    @include screen-small {
      font-size: 1.4rem;
    }

    &:hover,
    &:focus {
      transform: scale(1.5);
      color: #fb1111;
    }
  }
}

.btn--generate-address {
  align-self: end;
  position: relative;

  @include screen-large {
    align-self: center;
    margin: 0 auto;
  }

  @include screen-small {
    font-size: 1.2rem;
  }
}

.no-cep {
  text-align: center;
  color: $color-neutral-light-4;
  position: absolute;
  bottom: -55%;
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
