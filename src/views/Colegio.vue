<template>

  <b-container fluid>
    <b-row>
        <b-col md="2">
          <b-list-group>
              <template  >
                <b-list-group-item v-for="contenido of vinculos" :key="contenido">
                  <router-link :to="contenido.rura" style="color:#000000;">{{contenido.nombre}}</router-link>
                </b-list-group-item>
              </template>
          </b-list-group>      
        </b-col>
        
        <b-col md="10">
          <historia v-if="$route.params.id==2"/>
          <misionvision v-else-if="$route.params.id==1"/>
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
import index from './colegio/index.vue'
export default {
  components:{
    historia,
    index,
    misionvision,
    valores
  },
  data(){
    return{
      vinculos:[
        {
          nombre:"Modelo (Objetivo, Misión, Visión)",
          rura:"/colegio/1"
        },{
          nombre:"Historia Institucional",
          rura:"/colegio/2"
        },{
          nombre:"Valores Institucionales",
          rura:"/colegio/3"
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
</style>
