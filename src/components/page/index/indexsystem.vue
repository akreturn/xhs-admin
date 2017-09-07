<template>
  <div>
    <v-page-title vtitle="指标维护"></v-page-title>

    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple">

          <v-tree></v-tree>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="approval">
            <div class="app-form">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="">
                  <el-input v-model="formInline.num" placeholder="指标编号"></el-input>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="formInline.dec" placeholder="指标名称"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查找</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="app-table">
              <v-tree-table></v-tree-table>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>


</template>

<script>
  import axios from 'axios'
  import vPageTitle from '../../common/pageTitle.vue'
  import vTree from '../../common/eTree.vue'
  import vTreeTable from '../../common/treeTable.vue'
  export default {
    data() {
      return{
        formInline: {
          user: '',
          region: ''
        },
        tableData:[]

      }
    },
    components: {
      vPageTitle, vTree,vTreeTable
    },

    methods: {
      remote(row,callback){
        setTimeout(function() {
          callback(row.children)
        },500)
      },
      handleClick() {
        console.log(1);
      },
      onSubmit() {
        console.log('submit!');
      }
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
