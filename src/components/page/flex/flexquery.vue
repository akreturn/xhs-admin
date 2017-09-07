<template>
  <div>
    <v-page-title vtitle="指标补录"></v-page-title>

    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <v-tree></v-tree>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="approval">
            <div class="search">

              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="">
                  <el-date-picker type="date" style="width: 120px" placeholder="开始日期" v-model="formInline.date1" ></el-date-picker>
                </el-form-item>
                <el-form-item label="">
                  <el-date-picker type="date" style="width: 120px" placeholder="结束日期" v-model="formInline.date1" ></el-date-picker>
                </el-form-item>

                <el-form-item label="">
                  <el-select v-model="formInline.region" placeholder="请选择地域" style="width: 150px">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="">
                  <el-select v-model="formInline.region" placeholder="请选择查询指标" style="width: 160px">
                    <el-option label="指标一" value="shanghai"></el-option>
                    <el-option label="指标二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>


                <el-form-item>
                  <el-button type="primary" @click="">查询</el-button>
                  <el-button type="" @click="">清空</el-button>
                </el-form-item>
              </el-form>

            </div>
            <v-line></v-line>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>


</template>

<style scoped>
  .demo-form-inline{
    text-align: center;
    margin:  0 auto;
  }

</style>
<script>
  import axios from 'axios'
  import vPageTitle from '../../common/pageTitle.vue'
  import vTree from '../../common/eTree.vue'
  import vLine from '../../common/workruninfo/line.vue'

  export default {
    data() {
      return{
        formInline: {
          user: '',
          region: ''
        },
        tableData:[{
          date: 'ZB00001',
          name: '财政收入',
          province: '已审批',
          city: '2016-05-01',
          address: '张三'
        }, {
          date: 'ZB00001',
          name: '财政支出',
          province: '待审批',
          city: '2016-05-01',
          address: '张三'
        }, {
          date: 'ZB00001',
          name: 'GDP',
          province: '已补录',
          city: '2016-05-01',
          address: '张三'
        }]
      }
    },
    components: {
      vPageTitle, vTree,vLine
    },

    methods: {
      handleClick() {
        console.log(1);
      },
      onSubmit() {
        console.log('submit!');
      },

    },

    created: function () {
      axios.get('')
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
</script>
