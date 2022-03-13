<template>
  <!-- <Carrucel/> -->
  <div>
    <imgfondo />
    
      <b-row>
        <b-col md="3">
            <colapsever /> 
        </b-col>
        <b-col md="4"> </b-col>
        <b-col md="5">
          <div>
            <!-- <div>
              <b-card
            title="Imagenes institucionales"
            img-src="/fondos/matriculas.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Infromacion general las matriculas se encuentran activas para el
              año 2021.
            </b-card-text>

            <b-button to="/admisiones" href="#" variant="success"
              >Comenzar Registro</b-button
            >
          </b-card>
            </div> -->
            <div class="dataport">      
            <b-card img-src=""  img-alt="Card image" img-top>     
                <b-card-header header-tag="header" class="p-1" role="tab" end>
                  <b-button block v-b-toggle.accordion-2 variant="success"><b-icon icon="inbox-fill"></b-icon>
                  Videos Institucuonales</b-button>
                </b-card-header>    
              <b-card-text>
            
                <!-- <iframe width="100%"  src="https://www.youtube.com/list=UUA-uViVcw5eRX70yLo1EgUw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <iframe src="https://www.youtube.com/embed/videoseries?list=UUA-uViVcw5eRX70yLo1EgUw" width="560" height="315" frameborder="0" allow="autoplay"></iframe>
                 El colegio Gimnasio Integral Guatiquia ofrece a la comunidad una
                educación solida basada en principios y valores éticos, morales
                y culturales.
              </b-card-text>
            </b-card>
            </div>
            <br /><br /><br /><br />

          </div>
        </b-col>
      </b-row>
      <!-- <div class="nombres" font-scale="8"><p><strong>Presentacion estudiantes grado segundo 2018</strong><br>Estudiantes Gimnasio Integral</p></div> -->

  </div>
</template>

<script>
import Colapsever from '../components/colapsever.vue';
import Imgfondo from "../components/Imgfondo.vue";
//import Carrucel from '../components/Carrucel.vue';
//import Carrucel from './components/Carrucel.vue';
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //  Carrucel,
    Imgfondo,
    Colapsever
  }
};
</script>
<style scoped>
.dataport{
  position:absolute !important;
  width: 600px !important; 
  height: 315px !important;
  right: 10px;
}
</style>
