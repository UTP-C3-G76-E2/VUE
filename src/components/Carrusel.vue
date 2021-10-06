<template>
  <div>
    <v-carousel >
  
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
        items: [
          {
            src: 'https://ae01.alicdn.com/kf/H883173683eb14c509539da7a06e051eb0/Xiaomi-pulsera-inteligente-Mi-Band-5-accesorio-deportivo-resistente-al-agua-con-Bluetooth-Original-y-versi.jpg',
          },
          {
            src: 'https://img01.huaweifile.com/sg/ms/co/pms/product/6901443360222/group/800_800_C6B1D04C8B9DEA0B9AEEE67DC0AA53D1D07789DC4B17D9F0.webp',
          },
          {
            src: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/apple-watchos7-drag-diagram.png',
          },
          {
            src: 'https://i.blogs.es/571e0a/realme-watch-1-/450_1000.jpg',
          },
        ],    
        
    };
  },
};

</script>


<style>
</style>