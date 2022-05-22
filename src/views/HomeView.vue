<template>
  <main>
    <CepList />
    <AddressList />
  </main>
</template>

<script>
import CepList from "@/components/CepList";
import AddressList from "@/components/AddressList";

export default {
  name: "HomeView",
  components: {
    CepList,
    AddressList,
  },
};
</script>

<style lang="scss"></style>
