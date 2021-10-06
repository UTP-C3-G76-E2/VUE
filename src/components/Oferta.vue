<template>
  <div>
    <h1>OFERTAS</h1>
    
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="340"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="100%"
      src="https://ae01.alicdn.com/kf/H883173683eb14c509539da7a06e051eb0/Xiaomi-pulsera-inteligente-Mi-Band-5-accesorio-deportivo-resistente-al-agua-con-Bluetooth-Original-y-versi.jpg"
    ></v-img>

    <v-card-title>Xiaomi Mi Band 5 Global Version</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          2 (25)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ 106000 - 189500 • Producto original
      </div>

      <div>Xiaomi Mi Smart Band 5 1.1" caja de  plástico pc malla  black de  elastómero termoplástico y aleación de aluminio XMSH10HM</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tiendas disponibles</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip      
        href="https://es.aliexpress.com/item/1005002368726590.html?spm=a2g0o.productlist.0.0.65df18b027ZMyc&algo_pvid=08c70193-0d03-407c-92ce-a4dc2382bfa7&algo_exp_id=08c70193-0d03-407c-92ce-a4dc2382bfa7-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000025392498290%22%7D"
        target="_blank"
        text
      > <span>AliExpress</span>
      </v-chip>

        <v-chip      
        href="https://www.mercadolibre.com.co/xiaomi-mi-smart-band-5-11-caja-de-plastico-pc-malla-black-de-elastomero-termoplastico-y-aleacion-de-aluminio-xmsh10hm/p/MCO15963018?pdp_filters=category:MCO118449#searchVariation=MCO15963018&position=1&search_layout=stack&type=product&tracking_id=89b08db6-12e4-4a02-bcf4-f98f3ee18cad"
        target="_blank"
        text
      > <span>MercadoLibre</span>
      </v-chip>

        <v-chip      
        href="https://www.amazon.com/-/es/Band-Inteligente-Magn%C3%A9tica-Deportivos-Bluetooth/dp/B089NS9JW2/ref=sr_1_2?adgrpid=73057029490&dchild=1&hvadid=523203081025&hvdev=c&hvlocphy=1029300&hvnetw=g&hvqmt=b&hvrand=1405224631831686047&hvtargid=kwd-830967706499&hydadcr=25504_13429019&keywords=mi+band+xiaomi+5&qid=1633282737&sr=8-2"
        target="_blank"
        text
      > <span>Amazon</span>
      </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      > <span>Agregar producto</span>

      </v-btn>
    </v-card-actions>
    </v-card>
  </div>
</template>

<script>

</script>


<style>
</style>