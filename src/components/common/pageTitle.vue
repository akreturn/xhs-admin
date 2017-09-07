<template>
  <div class="pageTitle">
    <h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ vtitle }}</el-breadcrumb-item>
      </el-breadcrumb>
    </h1>


  </div>
</template>
<script>
  export default {
    props: ['vtitle']
  }
</script>
<style scoped>
  .pageTitle {
    clear: both;
    margin-top:15px;
    height:40px;
    line-height: 40px;
  }
  .pageTitle span{
    font-size: 16px;
  }

</style>
