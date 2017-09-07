 <template>
   <div class="stried-table">
     <el-table :data="tableData" style="width: 100%">
       <el-table-column prop="date" label="月份" >
       </el-table-column>
       <el-table-column prop="current" label="当月" >
       </el-table-column>
       <el-table-column prop="point" label="同比">
       </el-table-column>
     </el-table>
   </div>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        current: '100.8',
        point: '0.80%'
      }, {
        date: '2016-05-04',
        current: '122.4',
        point: '0.74%'
      }, {
        date: '2016-05-01',
        current: '42.3',
        point: '0.10%'
      }, {
        date: '2016-05-03',
        current: '45.34',
        point: '1.80%'
      }, {
        date: '2016-05-01',
        current: '34.8',
        point: '1.83%'
      }, {
        date: '2016-05-03',
        current: '242.4',
        point: '2.30%'
      }]
    }
  }
}
</script>
 <style scoped>

 </style>
