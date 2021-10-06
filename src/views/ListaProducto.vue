<template>
  <div id="contenedor">
    <div v-for="objPersonaje in personajes" :key="objPersonaje.Name">
      <tarjeta-personaje :personaje="objPersonaje" />
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import TarjetaPersonaje from "../components/TarjetaProducto.vue";

export default {
  components: {
    TarjetaPersonaje,
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
#contenedor{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>