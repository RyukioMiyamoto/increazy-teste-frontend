<template>
  <section class="address-list">
    <transition v-if="addressesArray.length === 0" appear mode="out-in">
      <div>
        <p class="empty">Nenhum endereço listado</p>
      </div>
    </transition>
    <transition tag="div" v-else appear mode="out-in">
      <ul tag="ul" class="addresses" mode="out-in">
        <li v-for="address in allAddresses" :key="address.cep">
          <div class="address">
            <img
              src="@/assets/icone-lugar.svg"
              class="address__icon"
              alt=""
              aria-hidden="true"
              width="32"
              height="32"
            />
            <div class="address__info">
              <p class="address__info--primary">
                {{ address.logradouro }}, {{ address.bairro }}
              </p>
              <p class="address__info--secondary">
                {{ address.localidade }} - {{ address.uf }}
              </p>
            </div>
            <p class="address__info--tertiary">{{ address.cep }}</p>
            <button
              class="address__delete-btn"
              @click="REMOVE_ADDRESS(address)"
              aria-label="Apaga o card de endereço"
            >
              <img
                src="@/assets/icone-lixo.svg"
                alt=""
                aria-hidden="true"
                width="22"
                height="22"
              />
            </button>
          </div>
        </li>
      </ul>
    </transition>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddressList",
  computed: {
    allAddresses() {
      return this.$store.state.addresses;
    },
    addressesArray() {
      return Object.keys(this.$store.state.addresses);
    },
  },
  methods: {
    ...mapMutations(["REMOVE_ADDRESS"]),
  },
};
</script>

<style lang="scss" scoped>
.empty {
  padding: 2rem;
  text-align: center;
  font-size: 2.4rem;
  color: $color-neutral-dark-2;

  @include screen-medium {
    font-size: 1.6rem;
  }
}

.address-list {
  @include flexColumn750;
  padding: 0 5rem;

  @include screen-large {
    max-width: 65rem;
    margin: 0 auto;
  }

  @include screen-small {
    max-width: 28rem;
    padding: 1rem 0;
  }
}

.addresses {
  @include flexColumn750;
  gap: 1.6rem;
}

.address {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;

  width: 61rem;
  padding: 3.4rem 2rem 3.4rem 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 2rem rgba($color-neutral-dark-1, 0.1);

  @include screen-large {
    max-width: 75%;
    align-self: center;
    margin: 0 auto;
  }

  @include screen-medium {
    grid-template-columns: 2fr auto auto;
    max-width: 100%;
    padding: 1.6rem 2.4rem;
    justify-content: center;
  }

  @include screen-small {
    grid-template-columns: 2fr auto;
    padding: 1.2rem;
  }

  &__icon {
    content: "";
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.6rem;

    @include screen-medium {
      display: none;
    }
  }

  &__info {
    &--primary {
      font-size: 2rem;
      font-weight: 700;
      color: $color-neutral-dark-2;

      @include screen-medium {
        font-size: 1.4rem;
      }
    }

    &--secondary {
      font-size: 1.6rem;
      letter-spacing: 0.01rem;
      font-weight: 400;
      color: $color-neutral-dark-1;

      @include screen-medium {
        font-size: 1.2rem;
      }
    }

    &--tertiary {
      padding: 1rem 4rem 1rem 1rem;
      letter-spacing: 0.01rem;
      color: $color-primary-light-1;
      position: relative;

      &::after {
        display: block;
        content: "";
        width: 0.1rem;
        height: 150%;
        background-color: $color-neutral-light-4;
        position: absolute;
        top: 50%;
        right: 15%;
        transform: translateY(-50%);

        @include screen-medium {
          display: none;
        }
      }

      @include screen-medium {
        padding: 0 1rem 0 0;
      }

      @include screen-small {
        grid-column: 1/-1;
        grid-row: 2;
      }
    }
  }

  &__delete-btn {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
    transition: 0.25s;

    &:hover,
    &:focus {
      transform: scale(1.5);
    }
    @include screen-medium {
      justify-self: end;
    }
    @include screen-small {
      grid-row: 1/-1;
      grid-column: 2;
      align-self: end;
    }
  }
}
</style>
