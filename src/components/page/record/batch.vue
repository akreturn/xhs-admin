<template>
  <!--补录审批-->
  <div class="approval">
    <v-page-title vtitle="批量补录"></v-page-title>
    <div class="app-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="formInline.num" placeholder="补录编号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.dec" placeholder="补录描述"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">新增</el-button>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="app-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="补录编号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="补录描述">
        </el-table-column>
        <el-table-column
          prop="province"
          label="补录状态">
        </el-table-column>
        <el-table-column
          prop="city"
          label="补录时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="补录人">
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
  import vPageTitle from '../../common/pageTitle.vue'
  export default {
    methods: {
      handleClick() {
        console.log(1);
      },
      onSubmit() {
        console.log('submit!');
      }
    },

    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          date: 'BL2928392',
          name: '文件导入补录',
          province: '已审批',
          city: '2016-05-01',
          address: '张三'
        }, {
          date: 'BL2928393',
          name: 'Excel文件补录',
          province: '待审批',
          city: '2016-05-01',
          address: '张三'
        }, {
          date: 'BL2928395',
          name: 'GDP批量补录',
          province: '已补录',
          city: '2016-05-01',
          address: '张三'
        }]
      }
    },
    components:{
      vPageTitle
    }
  }
</script>
