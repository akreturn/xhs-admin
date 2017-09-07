<template>
  <div>
    <v-page-title vtitle="采集监控"></v-page-title>
    <el-row :gutter="20">
     <div class="search">

       <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="">
           <el-date-picker type="date" placeholder="开始日期" v-model="formInline.date1" ></el-date-picker>
         </el-form-item>
         <el-form-item label="">
           <el-date-picker type="date" placeholder="结束日期" v-model="formInline.date1" ></el-date-picker>
         </el-form-item>

         <el-form-item>
           <el-button type="primary" @click="">查询</el-button>
           <el-button type="" @click="">清空</el-button>
       </el-form-item>
       </el-form>

     </div>

      <v-bingo></v-bingo>

      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="采集类型"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="截止时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="采集总量">
        </el-table-column>
      </el-table>

    </el-row>
  </div>
</template>

<script>
  import vPageTitle from '../../common/pageTitle.vue'
  import vTree from '../../common/eTree.vue'
  import vBingo from '../../common/workruninfo/bingo.vue'
  export default {

    methods: {

    },
    data() {

      return {
        formInline:{
          date1: '',
          date2: ''
        },
        tableData: [{
          date: 'Excel文件解析',
          name: '2017-02-23',
          address: '1.5'
        }, {
          date: 'Oracle连接',
          name: '201-02-23',
          address: '3.0'
        }, {
          date: '结构化数据爬取',
          name: '2017-07-23',
          address: '2.4'
        }]
      }
    },
    components: {
      vPageTitle,vTree,vBingo
    }
  }
</script>
<style scoped>
  .demo-form-inline{
    text-align: center;
    margin:  0 auto;
  }

</style>
