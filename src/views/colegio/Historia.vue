<template>
<div>
  <h1 class="titulo">Historia Institucional </h1>
     <div class="row">
        <b-card v-for="(contenido, id) in dataTimeline" :bg-variant="contenido.estilo" :text-variant="contenido.color"  tag="article" style="max-width: 16rem; margin: 3px;"  class=" d-flex mb-2" deck>     
            <b-card-header header-tag="header" class="p-1" role="tab" end>
              <h3>
              {{contenido.title}}</h3>
              </b-card-header>    
            <b-card-text>                
            {{contenido.description}}
            </b-card-text>
        </b-card>
      </div>
    </div>
</div>
</template>

<script>
import Timeline from 'timeline-vuejs'
export default {
  components: {Timeline},
  data(){
    return{
      messageWhenNoItems:'Error al buscar nuevos elementos en la Linea del Tiempo',
      dataTimeline: [
      { 
        estilo: 'Secundary',
        color: '',
        title: "Novena Etapa",
        description:
        "Con una fe inmensa en su proyecto se dedica a realizar volantes, pancartas y afiches que distribuyó en el sector con el fin de presentar y dar a conocer a los vecinos su sueño."
      },{ 
        estilo: 'default',
        color: '',
        title: "Octava Etapa",
        description:
        "Siguiendo el proceso de creación presenta en el año 1992 ante la secretaria de educación la petición de apertura del plantel educativo para los niveles A y B de preescolar y solicita a la vez la licencia para iniciar labores."
      },{ 
        estilo: 'dark',
        color: 'white',
        title: "Septima Etapa",
        description:
        "El primer paso fue buscar los espacios que le permitirían abrir las puertas a los estudiantes para lo cual solicito en arriendo a su hermano William tres aulas que le permitieran ofrecer los niveles de Pre jardín, jardín y transición."
      },{ 
        estilo: 'light',
        color: '',
        title: "Sexta etapa",
        description:
        "A partir de entonces se da inicio a la materialización de aquel proyecto, se empieza a tocar puertas y buscar los medios necesarios para cumplir con su objetivo: ofrecer una institución educativa para los niveles de preescolar con un alto nivel de formación y la construcción de un proyecto de vida sobre la base de la recuperación de los valores."
      },{ 
        estilo: 'danger',
        color: 'white',
        title: "Quinta etapa",
        description:
        "Fue la oportunidad que se le presentó para hacer contacto con la comunidad y darse a conocer como educadora, momento desde el cual se empieza a hacer realidad el sueño que durante muchos años guardaba en su corazón."
      },{ 
        estilo: 'warning',
        color: 'white',
        title: "Cuarta etapa",
        description:
        "En octubre del año 1992 y como vecina de este sector fue invitada por la comunidad de la urbanización Guatiquía para organizar y animar la fiesta que programó la junta de acción comunal del barrio con el fin de celebrar el día de los niños."
      },{ 
        estilo: 'dark',
        color: 'white',
        title: "Tercera etapa",
        description:
        "Motivada por este sueño empieza a construir su proyecto que desde las aulas de práctica pedagógica y experiencia como docente en la localidad 19 facilitó la realización del mismo."
      },{ 
        estilo: 'success',
        color: 'white',
        title: "Segunda Etapa",
        description:
        "Motivada por este sueño empieza a construir su proyecto que desde las aulas de práctica pedagógica y experiencia como docente en la localidad 19 facilitó la realización del mismo."
      },

      { 
        estilo: '',
        color: '',
        title: "Primera etapa",
        description:
        "Motivada por este sueño empieza a construir su proyecto que desde las aulas de práctica pedagógica y experiencia como docente en la localidad 19 facilitó la realización del mismo."
      },
      { estilo: 'primary',
        color: 'white',
        title: "Proyeccion",
        description:
        "Durante muchos años de práctica pedagógica y el deseo de participar e la formación de niños y jóvenes de Ciudad Bolívar generó en la maestra Rubiela Ángel el interés por crear una institución educativa para niños en edad preescolar."
      }
      ]
    }
  }, 
  methods:{
    ordenar(){
      return this.dataTimeline.reverse();
    }
  }
}
</script>

<style>
.titulo{

    background: linear-gradient(to right, rgb(243, 193, 169), white);
    padding: 5px;
    top: 0px;
    left: 0px;

}
</style>
