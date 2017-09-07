<template>
  <div>
    <v-page-title vtitle="收藏夹"></v-page-title>

    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      :closable="true"
      :close-transition="false"
      @close="handleClose(tag)"
    >
      {{tag}}
    </el-tag>
  </div>
</template>
<script>
  import vPageTitle from '../common/pageTitle.vue'
  export default{
      components:{
        vPageTitle
      },
    data() {
      return {
        dynamicTags: ['审批补录', '采集配置', '采集监控'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag){
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>
<style>
   .el-tag+.el-tag{
    margin-left: 10px;
  }
</style>
