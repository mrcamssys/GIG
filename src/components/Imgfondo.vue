<template>
  <div class="fondo">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="100%"
        img-height="100%"
      >
        <!-- <b-carousel-slide img-src="https://gimnasioguiatiquia.000webhostapp.com/wp-content/uploads/2022/03/base1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://gimnasioguiatiquia.000webhostapp.com/wp-content/uploads/2022/03/base2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://gimnasioguiatiquia.000webhostapp.com/wp-content/uploads/2022/03/base3.jpg"></b-carousel-slide> -->
        <template v-for="(data,id) in rutas" v-bind="id">
        <b-carousel-slide :key="id" :img-src="data.guid.rendered"></b-carousel-slide>
        </template>

      </b-carousel>
      
        <!-- <b-card v-for="(data) in rutas" v-bind="id"
            :title="data.guid.rendered"
            :img-src="data.guid.rendered"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            :key="id"
        /> -->
        
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagenesFondo",
  data(){
    return{
      rutas:[],
    }
  },
  
  mounted(){
    this.imagenportada();
  },

  methods:{
    async imagenportada(){
      try{  
        const data = await fetch('https://gimnasioguiatiquia.000webhostapp.com/wp-json/wp/v2/media/?order=desc&search=%22imgportada_%22');
        this.rutas=await data.json();
        console.warn("rutas",this.rutas);
      }catch(e){
        console.warn("Error",e)
      };
    }
  }

};
</script>

<style>
.fondo {
  position: fixed;
  background-image: url("/fondos/fondo.jpeg");
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: -100;
}
</style>
