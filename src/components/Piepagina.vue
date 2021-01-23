<template>
  <mdb-footer class="page-footer font-small pt-4 mt-4 ">
    <hr />
    <div class="stylish">
      <mdb-container class="text-left ">
        <mdb-row>
          <mdb-col md="6">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Nuestra Institucion
            </h5>
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
              Herramientas
            </h5>
            <ul class="listadovinculos">
              <li><a href="https://phet.colorado.edu/es/simulations/browse" target="_blank">
              <img src="https://phet.colorado.edu/favicon.ico" />
              Phet Laboratory</a></li>

              <li><a href="https://www.tinkercad.com/" target="_blank">
              <img src="https://www.tinkercad.com/img/favicon.ico" />
              Simulador de Tecnologia</a></li>

              <li><a href="https://www.biblored.gov.co/BibloRed-en-mi-Casa" target="_blank">
              <img src="https://www.biblored.gov.co/sites/default/files/logo.png" />
              Red Distrital de Bibliotecas</a></li>

              <li><a href="https://www.educacionbogota.edu.co/portal_institucional/servicio-ciudadania2" target="_blank">
              <img src="https://www.educacionbogota.edu.co/portal_institucional/themes/sed_govimentum8/favicon.ico" />
              Secretaria de Educacion Bogotá</a></li>

              <li><a href="https://www.mintic.gov.co/portal/inicio/Atencion-al-Publico/Informacion-para/Sector-Academico/" target="_blank">
              <img src="https://www.mintic.gov.co/portal/604/boxes-6290_favicon.ico" />
              Ministerio de Tecnologias</a></li>
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
          <mdb-col md="3" center>
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Informacion
            </h5>
            <b-img class="loder" src="logos/loder.png" alt="GIG Logo"></b-img>
            <p>
              Cll 59A Sur N° 45d-02/08<br />Horario: 630am A 2:00pm<br />Telefono:
              715 18 27
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <hr />
      <div class="footer-copyright text-center py-3 data1">
        <mdb-container fluid>
          &copy; 2021 Copyright: Colegio Gimnasio Integral Guatiquia.
          Desarrollo: Lic. Carlos A. Moreno S.
        </mdb-container>
      </div>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
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
.listadovinculos li{
  list-style:none;
  -moz-text-decoration-line: none;
}
.listadovinculos a{
  left: 0px;
  list-style-position: outside;
  text-decoration-color: blanchedalmond;
  color: bisque;
  font-size:small;
}
.listadovinculos img{
  width: 30px;
}
.listadovinculos ul{
  padding: 5px;
  margin: 5px;
}
</style>
