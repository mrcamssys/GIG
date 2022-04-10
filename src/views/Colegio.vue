<template>

  <b-container fluid>
    <b-row>
        <b-col md="2">
          <b-list-group>
              <template  >
                <b-list-group-item v-for="contenido of vinculos" :key="contenido.id">
                  <router-link :to="contenido.rura" style="color:#000000;">{{contenido.nombre}}</router-link>
                </b-list-group-item>
              </template>
          </b-list-group>      
        </b-col>
        
        <b-col md="10">
          <historia v-if="$route.params.id==2"/>
          <misionvision v-else-if="$route.params.id==1"/>
          <gobierno v-else-if="$route.params.id==4"/>
          <calidad v-else-if="$route.params.id==5"/>
          <valores v-else-if="$route.params.id==3"/>
        <index v-else/>

        </b-col>

      </b-row>
  </b-container>

</template>

<script>
import historia from './colegio/Historia.vue'
import misionvision from './colegio/mision_vision.vue'
import valores from './colegio/valores.vue'
import gobierno from './colegio/gobierno.vue'
import calidad from './colegio/calidad.vue'
import index from './colegio/index.vue'
export default {
  components:{
    historia,
    index,
    misionvision,
    valores,
    gobierno,
    calidad
  },
  data(){
    return{
      vinculos:[
        {
          id:1,
          nombre:"Modelo (Objetivo, Misión, Visión)",
          rura:"/colegio/1"
        },{
          id:2,
          nombre:"Historia Institucional",
          rura:"/colegio/2"
        },{
          id:3,
          nombre:"Valores Institucionales",
          rura:"/colegio/3"
        },
        {
          id:4,
           nombre:"Gobierno Escolar",
           rura:"/colegio/4"
        },
        {
           id:5,
           nombre:"Politicas de Calidad",
           rura:"/colegio/5"
        },
      ]
    }
  }
}
</script>

<style>
.fondocolegio{
  background-color: #F7F9F9;
  width: 100%;
  height: 100%;
}
body{
  background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-school-season-student-start-school-supplies-discount-image_33785.jpg");
  background-position-x: 0px;
  background-position-y: 0px;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
