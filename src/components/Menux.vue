<template>
  <div>
    <b-navbar class="menucabeza" toggleable="lg" variant="light">
      <b-navbar-brand  href="#" to="/">
        <div class="logo"></div>
        <div class="dlogo">
        <img src="logos/logo.png" class="logo" /> 
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="(item, id) in menuprincipal.menom"
            :key="id"
            font-scale="6"
            :to="menuprincipal.menruta[id]"
          >
            {{ item }}
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-btn
            @click="
              nuevaruta('https://www.facebook.com/gimnasioguatiquia.edu.co')
            "
            class="f1"><b-icon icon="facebook" font-scale="1"></b-icon></b-btn>

          <b-btn
            @click="
              nuevaruta(
                'https://www.youtube.com/channel/UCA-uViVcw5eRX70yLo1EgUw'
              )
            "
            class="y1"><b-icon icon="youtube" font-scale="1"></b-icon></b-btn> -->
          
          <b-btn to="/plataformas" class="btn-presentacion"
            ><b-icon icon="camera" font-scale="1"></b-icon> Saberes</b-btn>
          
          <b-btn @click="
              nuevaruta(
                'https://educaevoluciona.com/ingreso.html'
              )
            " class="y2"><b-icon icon="camera" font-scale="1"></b-icon> Educar Norma</b-btn>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menux",
  data() {
    return {
      menuprincipal: {
        menom: [
          "El Colegio",
          "Areas del Saber",
          "Elementos Escolares",
          "Sedes",
          "Admisiones & Registro",
          "Contacto"
        ],
        menruta: [
          "/colegio", 
          "/areas", 
          "/escolares", 
          "/sedes", 
          "/nadmisiones",
          "/contactos"
          ]
      }
    };
  },
  methods: {
    nuevaruta(ruta) {
      window.open(ruta, "_blank");
    }
  }
};
</script>

<style>
.navbar-light .navbar-nav .nav-link:hover {
  color: rgba(15, 78, 12, 0.7);
}

.navbar {
  box-shadow: 0px 0px 10px rgb(184, 182, 182);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.7);
}
.btn-presentacion {
  background-color: rgba(15, 78, 12, 0.7);
  margin: 2px;
}
.btn-presentacion:hover {
  background-color: rgba(60, 114, 175, 0.7);
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}

.f1 {
  background-color: rgba(17, 39, 233, 0.7);
  color: blanchedalmond;
  margin: 2px;
}
.f1:hover {
  background-color: rgba(17, 39, 233, 0.7);
  color: blanchedalmond;
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}
.y1 {
  background-color: rgba(231, 18, 18, 0.7);
  color: blanchedalmond;
  margin: 2px;
}
.y1:hover {
  background-color: rgba(231, 18, 18, 0.7);
  color: blanchedalmond;
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}

.y2{
  background-color: rgba(18, 103, 231, 0.7);
  color: blanchedalmond;
  margin: 2px;
}
.y2:hover {
  background-color: rgba(27, 7, 116, 0.7);
  color: blanchedalmond;
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}
.menucabeza{
  opacity: 0.9;
}
.dlogo{
  position:absolute;
  left: 10px;
  top: 0px;
  background-color: rgb(213, 210, 210);
}


@media (max-width: 990px), handheld and (orientation: landscape){  
  .dlogo{
    position:unset;
    left: 0px;
    top:  0px;
    background-color:transparent; 
    padding: 0px;
    margin: 0px;
  }
  .logo {
    width: 30% !important;
    padding: 0px !important;
  }
}
</style>
