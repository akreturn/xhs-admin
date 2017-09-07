<template>
  <div>
    <v-page-title vtitle="适配器管理"></v-page-title>
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple">

          <div class="tree">
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText">
            </el-input>

            <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              node-key="id"
              :default-expanded-keys="[1,2,3]"
              :filter-node-method="filterNode"
              ref="tree2">
            </el-tree>
          </div>

        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="approval">
            <div class="app-form">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="">
                  <el-input v-model="formInline.num" placeholder="适配器名称"></el-input>
                </el-form-item>


                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
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
  import vPageTitle from '../../common/pageTitle.vue'
  import vTreeTable from '../../common/treeTable.vue'

  export default {


    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        filterText: '',
        tableData5: [],
        data2: [{
          id: 1,
          label: '采集适配器',
          children: [{
            id: 4,
            label: 'FTP文件解析',
            children: [{
              id: 9,
              label: 'Excel文件解析'
            }, {
              id: 10,
              label: 'PDF文件解析'
            }, {
              id: 11,
              label: '文本解析'
            }]
          }, {
            id: 2,
            label: '数据库连接',
            children: [{
              id: 7,
              label: 'Oracle连接方式'
            }, {
              id: 8,
              label: 'Mysql连接方式'
            }]
          }, {
            id: 3,
            label: '网络爬虫',
            children: [{
              id: 5,
              label: '结构化数据爬取'
            }, {
              id: 6,
              label: '非结构化数据爬取'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    components: {
      vPageTitle, vTreeTable
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    }
  }
</script>
<style scoped>
  .tree .el-tree {
    border: none;
  }

  .tree .el-input {
    margin-bottom: 10px;
    border: none;
  }
</style>
