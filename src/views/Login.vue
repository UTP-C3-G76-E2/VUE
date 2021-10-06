<template>
  <v-card id="card-login"
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://netinmind.com/wp-content/uploads/2016/11/tienda-virtual.jpg"
    >
      <v-card-title>Administrar página</v-card-title>
    </v-img><br>
    <v-form>
        <v-text-field
            label="Usuario"
            placeholder="Usuario"
            outlined
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            placeholder="Contraseña"
            outlined
            type="password"
          ></v-text-field>
    </v-form>

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        Registrarse
      </v-btn>

      <v-btn
        color="blue"
        text
        @click="login"
      >
        Iniciar Sesión
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data: ()=>{
        return{

        }
    },
    methods: {
        login(){
            console.log("verificando credeciales");
            this.$router.push('/Administrar');
        }
    }
}
</script>

<style>
#card-login{
    margin-top: 5%;
}
</style>