<template>
  <!-- <Carrucel/> -->
  <div>
    <imgfondo />
    
      <b-row>
        <b-col md="3">
            <colapsever />          
        </b-col>
        <b-col md="6"> </b-col>
        <b-col md="3">
          <div>
            <div>
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
            </div>
            <br />
            <b-card img-src="/fondos/humano.jpeg" img-alt="Card image" img-top>
              <b-card-text>
                El colegio Gimnasio Integral Guatiquia ofrece a la comunidad una
                educación solida basada en principios y valores éticos, morales
                y culturales.
              </b-card-text>
            </b-card>
            <br />
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
<style scoped></style>
