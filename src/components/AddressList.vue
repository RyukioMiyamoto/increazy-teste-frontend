<template>
  <section class="address-list">
    <transition appear mode="out-in">
      <div v-if="addressesArray.length === 0">
        <p class="empty">Nenhum endereço listado</p>
      </div>
      <div v-else>
        <ul class="addresses">
          <transition-group appear mode="out-in">
            <li v-for="address in allAddresses" :key="address.cep">
              <div class="address">
                <img src="@/assets/icone-lugar.svg" class="address__icon" />
                <div class="address__info">
                  <p class="address__info--primary">
                    {{ address.logradouro }}, {{ address.bairro }}
                  </p>
                  <p class="address__ info--secondary">
                    {{ address.localidade }} - {{ address.uf }}
                  </p>
                </div>
                <button
                  class="address__delete-btn"
                  @click="REMOVE_ADDRESS(address)"
                >
                  <img src="@/assets/icone-lixo.svg" alt="" />
                </button>
              </div>
            </li>
          </transition-group>
        </ul>
      </div>
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
  color: $color-neutral-light-4;
}

.address-list {
  @include flexColumn750;
  padding: 0 5rem;
}

.addresses {
  @include flexColumn750;
  gap: 1.6rem;
}

.address {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  width: 61rem;
  padding: 3.4rem 2rem 3.4rem 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 2rem rgba($color-neutral-dark-1, 0.1);

  &__icon {
    content: "";
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.6rem;
  }

  &__info {
    &--primary {
      font-size: 2rem;
      font-weight: 700;
      color: $color-neutral-dark-2;
    }

    &--secondary {
      font-size: 1.6rem;
      font-weight: 400;
      color: $color-neutral-dark-1;
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
  }
}
</style>
