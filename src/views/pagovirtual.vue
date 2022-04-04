<template>
  <div class="ingresox">
  <iframe ref="" width="100%" height="100%" :src="url" style="border:0px;"></iframe>
  </div>
</template>

<script>
let root;
export default {
  name: "plataformas",
  data() {
    return {
      url:"https://gimnasioguiatiquia.000webhostapp.com",
    };
  },
  created: function() {
		root = this;
    console.warn("ruta: ",root.$route.params)
    if(root.$route.params.url!=null) root.url="https://gimnasioguiatiquia.000webhostapp.com/?"+root.$route.params.url;
    
	},

  methods: {
  }
};
</script>

<style  scoped>
.ingresox{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 50px;
    z-index: -1;
}

</style>
