<template>
  <div>
    <br>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="personaje.PicUrl"
      >
        <v-card-title>{{personaje.Name}}</v-card-title>
      </v-img>


      <v-card-text class="text--primary">
        <div>Profesión: {{personaje.Profession}}</div>

        <div>Planeta: {{personaje.Planet}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    props: ["personaje"]
};
</script>

<style>
h1{
    text-align: center;
    font-size: 2rem;
}
</style>