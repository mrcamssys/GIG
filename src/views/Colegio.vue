<template>
  <b-container fluid>
    <b-row>
        <b-col md="2">
          <b-list-group>
              <b-list-group-item v-for="contenido in vinculos">{{contenido.nombre}}</b-list-group-item>
          </b-list-group>      
        </b-col>
        <b-col md="10">
          <Historia />
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
import Historia from '../components/colegio/Historia.vue'
export default {
  components:{Historia},
  data(){
    return{
      vinculos:[
        {
          nombre:"Historia Institucional",
          rura:"#"
        },{
          nombre:"Modelo (Objetivo, Misión, Visión)",
          rura:"#"
        },{
          nombre:"Filosofia y Horizonte",
          rura:"#"
        },
      ]
    }
  }
}
</script>

<style></style>
