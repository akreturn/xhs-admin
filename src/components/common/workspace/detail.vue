<template>
  <div>
    <h4 class="title">{{ $route.query.title }}</h4>
    <p>{{ $route.query.content }}</p>
  </div>
</template>
<script>
  export default {
    name:'detail',
    data(){
      return {
        msg:'23'
      }
    }

  }
</script>
<style scoped>
  .title{
    text-align: center;
  }
</style>
