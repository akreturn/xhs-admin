<template>
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
</template>
<script>
export default {
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
      formInline: {
        user: '',
        region: ''
      },
      filterText: '',
      data2: [{
        id: 1,
        label: '少数民族经济指标',
        children: [{
          id: 4,
          label: '财政',
          children: [{
            id: 9,
            label: '财政收入'
          }, {
            id: 10,
            label: '财政支出'
          }]
        }, {
          id: 2,
          label: '人口与资源',
          children: [{
            id: 7,
            label: '民族人口'
          }, {
            id: 8,
            label: '占总人口比重'
          }]
        }, {
          id: 3,
          label: '社会科学',
          children: [{
            id: 5,
            label: '卫生'
          }, {
            id: 6,
            label: '教育'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }

}
</script>
<style scoped>
.tree .el-tree{
  border:none;
}
.tree .el-input{
  margin-bottom:10px;
  border:none;
}
</style>



