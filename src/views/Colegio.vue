<template>

<b-container fluid="md">
  <h1>Historia Institucional</h1>
  <Timeline
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      :show-day-and-month="true"
      order="desc"
    />
</b-container>

</template>

<script>
import Timeline from 'timeline-vuejs'
export default {
  components: {Timeline},
  data(){
    return{
      messageWhenNoItems:'Error al buscar nuevos elementos en la Linea del Tiempo',
      dataTimeline: [
      { id: 1,
        from: new Date(1999,1,12),
        title: "Segunda etapa",
        showDayAndMonth: true,
        description:
        "Estableciendo texto de escritura"
      },
      { id: 2,
        from: new Date(2004,0,12),
        title: "Primera etapa",
        showDayAndMonth: true,
        description:
        "Estableciendo texto de escritura."
      }
      ]
    }
  }
}
</script>

<style></style>
