<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Ecommerce Logo"
          class="shrink mr-2"
          contain
          src="https://i.ibb.co/S6yWZ4N/logo-ecommerce-web.png"
          transition="scale-transition"
          width="75"
        />

        <v-img
          
          alt="Texto proyecto G76-2"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://i.ibb.co/JmqjwCz/texto-g76-2.png"
          width="300"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        @click="Inicio"
      >
        <span class="mr-2">Home </span>
        <!--<v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>

            <v-btn
        
        target="_blank"
        text
        @click="productos"
      >
        <span class="mr-2">Productos </span>
        <!--<v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>

            <v-btn
        href="https://github.com/UTP-C3-G76-E2"
        target="_blank"
        text
      >
        <span class="mr-2">Nosotros </span>
        <!--<v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>

      <v-btn
        target="_blank"
        text
        @click="login"
      >
        <span class="mr-2">Administrar </span>
        <!--<v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>




    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
        login(){
            
            this.$router.push('/Login');
        },
        Inicio(){
            
            this.$router.push('/');
        },
        productos(){
            
            this.$router.push('/listaproducto');
        }
        
    }
};
</script>