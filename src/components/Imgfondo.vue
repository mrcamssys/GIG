<template>
  <div class="fondo">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="100%"
        img-height="100%"
      >
        <b-carousel-slide img-src="/fondos/base1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="/fondos/base2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="/fondos/fondo.jpg"></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.fondo {
  position: fixed;
  background-image: url("/fondos/fondo.jpeg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: -100;
}
</style>
