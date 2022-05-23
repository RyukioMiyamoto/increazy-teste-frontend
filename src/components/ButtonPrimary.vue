<template>
  <button
    type="submit"
    class="btn"
    @click.prevent="method"
    :aria-label="ariaLabel"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: { method: { type: Function }, ariaLabel: { type: String } },
};
</script>

<style lang="scss" scoped>
.btn {
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

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: rgba($color-primary-dark-1, 0.75);
    transform: translateY(-0.3rem);
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background-color: rgba($color-primary-dark-1, 0.325);
  }
  @include screen-large {
    padding: 0.8rem 1.5rem;
    font-size: 1.4rem;
    align-self: center;
  }
}
</style>
