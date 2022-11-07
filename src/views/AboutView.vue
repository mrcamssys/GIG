<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue"

const name="dinamico";
let styles="color: yellow;"

const contador=ref(0)

const decremento = () => {
  contador.value--;
  // cambioColor();
}

const aumento = () => {
  contador.value++;
  // cambioColor()
}

const cambioColor=()=>{
  console.warn(contador)
  console.warn(contador.value > 0)
  if(contador.value >= 0) return "color: green;"
  else return "color: red;"
}

const colorbuton=()=>{
  console.warn(contador)
  console.warn(contador.value > 0)
  if(contador.value >= 0) return "btn-secondary"
  else return "btn-primary"
}


</script>



<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->
  
  <div class="container text-center mt-0">
    <h1>sistema: {{name}}</h1>
    <h2 :style="cambioColor()">cambio de color: {{contador}}</h2>
    <button type="button" @click="decremento" :class="'btn '+colorbuton()+' m-1'"> Decremento -- </button>
    <button type="button" @click="aumento" class="btn btn-secondary m-1" > Incremento ++ </button>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>


@media (min-width: 1024px) {
 
}
</style>
