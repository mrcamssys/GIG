<template>
  <mdb-footer class="page-footer font-small pt-4 mt-4 ">
    <hr />
    <div class="stylish">
      <div class="divfondo">
      
      <mdb-container class="text-left">
        <mdb-row>
          <mdb-col md="6">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Nuestra Institucion
            </h5>
            <hr>
            <p>
              Hacer parte de la comunidad educativa Guatiquia, implica disfrutar
              y poner en práctica los derechos y deberes que buscan el
              fortalecimiento de la autoestima y la autorregulación, basados en
              el respeto, la autonomía, la sana convivencia y el bienestar
              individual y colectivo; para que nuestro niños, niñas y jóvenes
              reflejen desde la cotidianidad su identidad con la institución
              educativa, en donde el eje central es el ser humano integral como
              agente de cambio y transformador de su entorno.
            </p>

            
          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
          <mdb-col md="3">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Paginas Auxiliares
            </h5> 
            <hr>

            <div>
               <a v-for="(imgs, id) in imgiconos" :key="id"  @href="imgrutas[id]" target="_blank">
                <b-img class="iconos"  rounded="0" :src="imgs" ></b-img>
               </a>
            </div>

          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
          <mdb-col md="3" center>
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Informacion
            </h5>
            <hr>
            <p>
              <b>Representante legal:</b><br>
              Rectora: Lic. Rubiela Angel Galvis.<br>
              <hr>
              <b>Comunicacion Secretaria:</b><br>
              Email: <a href="soporteadministrativo@gimnasioguatiquia.edu.co">soporteadministrativo@gimnasioguatiquia.edu.co</a><br>
              Celular: +57 319 209 86 59
              <br>
            </p>
            <hr>
            <!-- <b-img class="loder" src="logos/loder.png" alt="GIG Logo"></b-img> -->
            <p>
              <b-icon icon="geo-alt-fill"></b-icon>
              Cll 59A Sur N° 45d-02/08<br />
              <b-icon icon="telephone-outbound-fill"></b-icon>
              Telefono: 715 18 27<br>
              <b-icon icon="clock"></b-icon>
              Lunes a Viernes 6:30AM a 2:00PM<br>
            </p>
            <div>
               <a href="https://www.educacionbogota.edu.co/portal_institucional/servicio-ciudadania2" target="_blank">
                <b-img height="80px"  rounded="0" src="https://www.culturarecreacionydeporte.gov.co/sites/default/files/adjuntos_paginas_2014/logo_bogota_png_byn_rojo-01.png" ></b-img>
               </a>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      
      
      <hr />
      <div class="footer-copyright text-center py-3 data1">
        <mdb-container fluid>
          &copy; 2021 Copyright: Colegio Gimnasio Integral Guatiquia.
          Desarrollo: Lic. Carlos A. Moreno S.
        </mdb-container></div>
      </div>
    </div> 
  </mdb-footer>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  data(){
    return{
      imgiconos:[
        'https://phet.colorado.edu/images/phet-social-media-logo.png',
        'https://www.tinkercad.com/img/favicon.ico',
        "https://pbs.twimg.com/profile_images/1334165539388788737/CpQQmutj.jpg",
        "https://www.valoraanalitik.com/wp-content/uploads/2019/11/MIN-TIC.png"
        ],
      imgrutas:[
        'https://phet.colorado.edu/es/simulations/browse',
        'https://www.tinkercad.com/',
        'https://www.biblored.gov.co/BibloRed-en-mi-Casa',
        'https://www.mintic.gov.co/portal/inicio/Atencion-al-Publico/Informacion-para/Sector-Academico/',
        ]
    }
  },
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
.divfondo{
  background-image: url('https://i.pinimg.com/originals/ce/10/5f/ce105fda85be60e90b3fec3a1a43b799.jpg') !important;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.loder {
  width: 80px;
}
.stylish {
  background-color: rgb(45, 45, 46) !important;
  color: darkgray;
}
.data1 {
  background-color: rgb(26, 26, 27) !important;
  color: darkgray;
}

.iconos{
  padding: 10px;
  height: 100px;
  filter: grayscale(80%);
}
.iconos:hover{
  padding: 10px;
  height: 120px;
  filter: grayscale(0%);
}

@media (max-width: 990px), handheld and (orientation: landscape){  
  .divfondo{
    background-image: url('https://i.pinimg.com/originals/ce/10/5f/ce105fda85be60e90b3fec3a1a43b799.jpg') !important;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
}

</style>