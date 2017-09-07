<template>

  <div id="app">
    <v-page-title vtitle="数据地图"></v-page-title>

    <area-map :tipFormater="tipFormater"></area-map>
  </div>
</template>

<script>
  import areaMap from '../../common/map/areaMap.vue'
  import vPageTitle from '../../common/pageTitle.vue'

  export default {
    components: {
      areaMap,vPageTitle
    },
    data(){
      return{
        formInline:{
          date1: '',
          date2: ''
        },
      }
    },
    methods: {
      tipFormater (params) {
        return `<p style="color:orange">${params.name}</p>`;
      }
    }
  }
</script>
<style scoped>
  .demo-form-inline{
    text-align: center;
    margin:  0 auto;
  }

</style>


