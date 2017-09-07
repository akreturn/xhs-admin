<template>
  <!--补录审批-->
  <div>
    <v-page-title vtitle="角色管理"></v-page-title>
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <v-tree></v-tree>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="role">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="用户列表" name="first">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="">
                    <el-input v-model="formInline.number" placeholder="工号"></el-input>
                  </el-form-item>
                  <el-form-item label="">
                    <el-input v-model="formInline.number" placeholder="登录名"></el-input>
                  </el-form-item>
                  <el-form-item label="">
                    <el-input v-model="formInline.user" placeholder="姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="允许登录" prop="delivery">
                    <el-switch on-text="" off-text="" v-model="delivery"></el-switch>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                  </el-form-item>
                </el-form>

                <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="归属部门"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="员工编号"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="province"
                    label="登录名"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="姓名"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="电话"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="手机">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                    <template scope="scope">
                      <el-button @click="handleClick" type="text" size="small">删除</el-button>
                      <el-button type="text" size="small">编辑</el-button>
                      <el-button type="text" size="small">查看</el-button>
                    </template>
                  </el-table-column>
                </el-table>

              </el-tab-pane>
              <el-tab-pane label="用户添加" name="second">
                <vAddUser></vAddUser>
              </el-tab-pane>


            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>


</template>

<script>
  import vAddUser from '../../common/setting/adduser.vue'
  import vPageTitle from '../../common/pageTitle.vue'
  import vTree from '../../common/eTree.vue'

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
        delivery: false,
        activeName2: 'first',
        formInline: {
          user: '',
          region: ''
        },
        filterText: '',
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [{
          date: '业务部',
          name: 'P00001',
          province: 'sunliangliang',
          city: '孙亮亮',
          address: '0105000000',
          zip: 1350000000
        }, {
          date: '技术部',
          name: 'P00002',
          province: 'admin',
          city: '系统管理员',
          address: '0101000000',
          zip: 1380000000
        }],
        tableData5: []
      }
    },
    components: {
      vAddUser, vPageTitle, vTree
    },
  }
</script>
