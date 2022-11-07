<script setup>

// mi rpimer componente en api 
defineProps(
    {
        title: String,
        id: Number,
        body: {
            type: String,
            default: "Sin texto encotrado.",
        }
    }
);
</script>

<template>
    <div class="container-fluid mt-0">
    <div class="card-body">
      <h5 class="card-title">{{id}} - {{title}}</h5>
      <p>{{body}}</p>
    </div>
  </div>
</template>