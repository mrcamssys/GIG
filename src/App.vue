<template>
  <div id="app">
    <menux />
    <b-container fluid>
      <br />
      <div class="social-bar">
        <a href="https://www.facebook.com/gimnasioguatiquia.edu.co" class="icon icon-facebook" target="_blank"></a>
        <a href="https://twitter.com/GGuatiquia" class="icon icon-twitter" target="_blank"></a>
        <a href="https://www.youtube.com/channel/UCA-uViVcw5eRX70yLo1EgUw" class="icon icon-youtube" target="_blank"></a>
        <!-- <a href="https://www.instagram.com/devcodela/" class="icon icon-instagram" target="_blank"></a> -->
      </div>
      <router-view />
    </b-container>
    <piepagina />
  </div>
</template>

<script>
import Menux from "./components/Menux.vue";
import Piepagina from "./components/Piepagina.vue";
export default {
  components: { Menux, Piepagina }
};
</script>

<style>
.logo {
  width: 180px;
  padding: 15px;
}
body {
  /*font-family: "Allan", cursive;*/
  font-family: 'Alegreya', serif;

}
</style>
