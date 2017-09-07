<template>
  <div>
    <v-page-title vtitle="图表信息"></v-page-title>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <vCarouse></vCarouse>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <vNewlist></vNewlist>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">

      <el-col :span="16">
        <h4>指标分析</h4>
        <div class="grid-content bg-purple">
          <v-line></v-line>
        </div>
      </el-col>
      <el-col :span="8">
        <h4 style="visibility:hidden;">指标分析表格</h4>
        <div class="grid-content bg-purple chartTab">
          <vLineTable></vLineTable>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import vCarouse from '../../common/workspace/carouse'
  import vNewlist from '../../common/workspace/newlist'
  import vLine from '../../common/workspace/line'
  import vLineTable from '../../common/workspace/lineTable'
  import vScatte from '../../common/workspace/scatte'
  import vPageTitle from '../../common/pageTitle.vue'
  import vRound from '../../common/workspace/round.vue'

  export default {
    data(){
      return {
        activeNames: ['1']
      }
    },
    components: {
      vCarouse, vNewlist, vLine, vLineTable, vScatte, vPageTitle, vRound
    }
  }
</script>
<style>
  .chartTab{
    margin-top: 90px;
  }
</style>
