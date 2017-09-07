<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="用时">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          tag: '10 Min'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          tag: '8 min'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          tag: '15 Min'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          tag: ' 13 Min'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          tag: '15 Min'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          tag: ' 13 Min'
        }]
      }
    }
  }
</script>
