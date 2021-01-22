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
            <ul class="list-unstyled">
              <li><a href="#!">Phet Laboratory</a></li>
              <li><a href="#!">Red Distrital de Bibliotecas</a></li>
              <li><a href="#!">Secretaria de Educacion Bogotá</a></li>
              <li><a href="#!">Ministerio de Tecnologias</a></li>
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
</style>
