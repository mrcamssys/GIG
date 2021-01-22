<template>
  <!-- <Carrucel/> -->
  <div>
    <imgfondo />
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="3">
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
        </b-col>
        <b-col md="5"> </b-col>
        <b-col md="4">
          <div>
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      src="/fondos/plataformas.jpeg"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Plataformas">
                      <b-card-text>
                        Interactua con Educar, Saberes y Microsft Teams, con el
                        fin de hacer llegar la tecnologia con la comunidad
                        academica.
                      </b-card-text>
                      <b-button href="#" to="/plataformas" variant="info"
                        >Iniciar</b-button
                      >
                    </b-card-body>
                  </b-col>
                </b-row>
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
    </b-container>
  </div>
</template>

<script>
import Imgfondo from "../components/Imgfondo.vue";
//import Carrucel from '../components/Carrucel.vue';
//import Carrucel from './components/Carrucel.vue';
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //  Carrucel,
    Imgfondo
  }
};
</script>
<style scoped></style>
