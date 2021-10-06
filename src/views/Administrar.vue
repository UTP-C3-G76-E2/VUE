<template>
  <div>
    <admin-producto />
  </div>
</template>

<script>
import store from "../store/index.js";
import AdminProducto from "../components/AdminProducto.vue";

export default {
  components: {
    AdminProducto,
  },
  created: () => {
    store.dispatch("getPersonajes");
  },
  computed: {
    personajes: () => {
      return store.state.personajes;
    },
  },
};
</script>

<style>
</style>