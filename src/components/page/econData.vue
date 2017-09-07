<template>
  <div class="modal-data">

    <v-page-title vtitle="宏观经济数据"></v-page-title>

    <el-row :gutter="20">
      <el-col :span="5">
        <div class="tree">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText">
            </el-input>

            <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              node-key="id"
              show-checkbox
              :default-expanded-keys="[1,2,3]"
              :filter-node-method="filterNode"
              ref="tree2">
            </el-tree>
          </div>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="action" style="text-align: right;margin-bottom: 10px;">
            <el-button>默认按钮</el-button>
            <el-button type="primary">收藏到模板</el-button>
          </div>

          <el-table
            :data="tableData3"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="指标名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="id"
              label="指标Id">
            </el-table-column>
            <el-table-column
              prop="company"
              label="单位">
            </el-table-column>
            <el-table-column
              prop="rate"
              label="频率"
              width="80">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="起始时间">
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间">
            </el-table-column>
            <el-table-column
              prop="updateTime"
              label="更新时间">
            </el-table-column>
            <el-table-column
              prop="source"
              label="来源">
            </el-table-column>
            <el-table-column
              prop="city"
              label="来源"
              >
            </el-table-column>

          </el-table>

          <div style="margin: 20px 0">
            <v-multip></v-multip>
          </div>

          <el-table
            :data="tableData3"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="指标名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="id"
              label="指标Id">
            </el-table-column>
            <el-table-column
              prop="company"
              label="单位">
            </el-table-column>
            <el-table-column
              prop="rate"
              label="频率"
              width="80">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="起始时间">
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间">
            </el-table-column>
            <el-table-column
              prop="updateTime"
              label="更新时间">
            </el-table-column>
            <el-table-column
              prop="source"
              label="来源">
            </el-table-column>
            <el-table-column
              prop="city"
              label="来源"
            >
            </el-table-column>

          </el-table>

        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>

  import vPageTitle from '../common/pageTitle.vue'
  import vMultip from '../common/echart/multip.vue'

  export default {

    components: {
      vPageTitle,vMultip
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
    },

    data() {
      return {
        filterText: '',
        data2: [{
          id: 1,
          label: '国民经济核算',
          children: [{
            id: 4,
            label: '国内生产总值',
            children: [{
              id: 9,
              label: '国内生产总值()',
              children: [{
                id: 10,
                label: '第一产业-工业-累计值'
              }, {
                id: 11,
                label: '第二产业-建筑-累计值'
              }]
            }]
          }]
        }],
        tableData3: [{
          name: 'GDP累计值',
          id: 'E00001',
          company: '亿元',
          rate: '季',
          startTime: '2014-03',
          endTime: '2016-09',
          updateTime: '2016-09',
          source: '国家统计局',
          city: '北京'
        },{
          name: 'GDP累计值',
          id: 'E00001',
          company: '亿元',
          rate: '季',
          startTime: '2014-03',
          endTime: '2016-09',
          updateTime: '2016-09',
          source: '国家统计局',
          city: '上海'
        },],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  }


</script>
<style scoped>
  .tree .el-tree {
    border: none;
  }
  th.gutter{
    width: 0!important;
  }
  th:last-child{
    width: 0!important;
  }
  .tree .el-input {
    margin-bottom: 10px;
    border: none;
  }
</style>

