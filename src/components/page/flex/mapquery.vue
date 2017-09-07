<template>
  <div>
    <v-page-title vtitle="地图查询"></v-page-title>
    <el-row :gutter="20">
      <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="">
            <el-input v-model="formInline.user" placeholder="查询指标"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="">查询</el-button>
            <el-button type="" @click="">清空</el-button>
          </el-form-item>
        </el-form>
      </div>


    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <v-map-china></v-map-china>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div style="position: relative;top:-50px;right: 50px;"><v-bar></v-bar></div>
          <div style="position: relative;top:-150px;right: 50px;"><v-ring></v-ring></div>


        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import vPageTitle from '../../common/pageTitle.vue'
  import vTree from '../../common/eTree.vue'
  import vMapChina from '../../common/map/mapChina.vue'
  import vBar from '../../common/workruninfo/bar.vue'
  import vRing from '../../common/workruninfo/ring.vue'

  export default {

    methods: {},
    data() {

      return {
        formInline: {}
      }
    },
    components: {
      vPageTitle, vTree, vMapChina,vBar ,vRing
    }
  }
</script>
<style scoped>
  .demo-form-inline {
    text-align: center;
    margin: 0 auto;
  }

</style>
