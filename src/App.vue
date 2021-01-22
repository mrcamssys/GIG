<template>
  <div id="app">
   /* eslint-disable no-eval */
    <menux />
    <b-container fluid="md">
      <br />
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
  font-family: "Allan", cursive;
}
</style>
