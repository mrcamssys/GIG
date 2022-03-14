<template>
  <div class="accordion" role="tablist">

    <!-- <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" end>
        <b-button block v-b-toggle.accordion-2 variant="info">
          <b-icon icon="inbox-fill"></b-icon> Admisiones GIG</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div v-html="dato.excerpt.rendered"></div>
            
            <b-img :src="datoepimg" fluid alt="Fluid image"></b-img>
          <b-button :href="dato.guid.rendered" size="lg" block variant="warning">Más Información</b-button>
          </b-card-text>
        </b-card-body> 
      </b-collapse>
    </b-card>
     -->
    
    <!-- <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" end>
        <b-button block v-b-toggle.accordion-1 variant="info">
            <b-icon icon="inbox-fill"></b-icon> Información Institucional</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div v-html="datocom.excerpt.rendered"></div>
            
            <b-img :src="datoepimgcom" fluid alt="Fluid image"></b-img>
          <b-button :href="datocom.guid.rendered" size="lg" block variant="warning">Más Información</b-button>
          </b-card-text>
        </b-card-body> 
                
      </b-collapse>
    </b-card> -->
  <template >
     <b-card no-body class="mb-1" >
      <b-card-header header-tag="header" class="p-1" role="tab" end>
        <b-button block v-b-toggle.accordion-1 variant="info">
            <b-icon icon="inbox-fill"></b-icon> Información Institucional</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">




<!-- 
<b-carousel
    id="carouselinfo"
      :interval="4000"
      controls
      indicators


  >
    <b-carousel-slide v-for="(datax,id) in informacion" v-bind="id" :key="id">
        <b-card-body>
          <b-card-text>
            <div v-html="datax.html"></div>
            <b-img :src="datax.urlimg" fluid alt="Fluid image"></b-img>
          <b-button :href="datax.urldata" size="lg" block variant="warning">Más Información</b-button>
          </b-card-text>
        </b-card-body> 

    </b-carousel-slide>
    
  </b-carousel>
 -->



<b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#FFFFFF"
      style="text-shadow: 1px 1px 2px #333; height:700px;"
    >
    <template img-blank v-for="(datax,id) in informacion" v-bind="id">
      <b-carousel-slide  :img-src="datax.urlimg"  :key="id">         
            <!-- <div v-html="datax.html"></div> -->
            <!-- <b-img :src="datax.urlimg" fluid alt="Fluid image"></b-img> -->
          <b-button :href="datax.urldata" size="lg" block variant="warning"> <div v-html="datax.html"></div> </b-button>
      </b-carousel-slide>
    </template>
    </b-carousel>
        




      </b-collapse>
    </b-card>
  </template>


    <!--<b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" end>
        <b-button block v-b-toggle.accordion-3 variant="info"><b-icon icon="inbox-fill"></b-icon> Comunicados Rectoria</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> -->
    
  </div>
</template>

<script>
export default {
    data() {
      return {

        informacion:[{titulo:"Informacion",html:"<h2>Sin informacion</h2>",urlimg:"fondos/plataformas.jpeg",urldata:"https://gimnasioguatiquia.edu.co/"}],
        dato:{},
        datoimg:{},
        datoepimg:{},
        imagen:{},

        datocom:{},
        datoimgcom:{},
        datoepimgcom:{},
        imagencom:{},
        text:`Error en la lectura temporal de datos consultar con el administrador.`
      }
    },
  mounted(){
    // this.admision();
    this.comunicados();
  },
    methods:{
      
      async comunicados(){
        //datocom.excerpt.rendered //texto html
        //datoepimgcom ruta imagen
        //ruta de entradas datocom.guid.rendered

        let datosEP, objeto, i, arreglo=[], datoespecifico,urlimgdata="",cant=0;
        try{  
          const data = await fetch('https://gimnasioguiatiquia.000webhostapp.com/wp-json/wp/v2/posts?order=desc');
          datosEP=await data.json();
          console.warn("admision datos",datosEP);
          if(datosEP.length<3){
              cant=datosEP.length;
          }else{
            cant=3;
          }
          
          
          for(i=0; i<cant; i++){
              datoespecifico = await datosEP[i];
              urlimgdata = await datoespecifico._links["wp:featuredmedia"][0].href
              objeto={
                html: await datoespecifico.excerpt.rendered,
                urldata: await datoespecifico.guid.rendered,
                titulo:"Informacion",
                urlimg: await this.loadimage(urlimgdata),
              };
              console.warn("datoespecifico: "+i+" ",datoespecifico);
              console.warn("objeto: "+i+" ",objeto);
              await arreglo.push(objeto);
             // this.datoimgcom = await this.dato._links["wp:featuredmedia"][1].href;
          }
          this.informacion=await arreglo;
          // await this.loadimage();


          // console.warn("admision datosimagen",this.informacion);
          console.warn("cantidad datos",datosEP.length);
          console.warn("admision datos",datosEP);
        }catch(e){
          console.warn("Error",e)
        };
      },

      async loadimage(datoimg){
        let rutaimagen="", datoepimg;
        try{  
          const data = await fetch(datoimg);
          datoepimg=await data.json();
          rutaimagen=await datoepimg.guid.rendered;
          console.warn("admision imagenes",this.datoepimg);
        }catch(e){
          console.warn("Error",e)
        };
        return rutaimagen;
      },

      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }



  },  
}
</script>

<style>

</style>
