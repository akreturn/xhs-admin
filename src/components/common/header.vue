<template>
  <div class="header">
    <el-row :gutter="10">
      <!--Logo-->
      <el-col  :md="5">
        <div class="logo">
          <span class="logo_prefix">少数民族经济信息平台</span><span class="logo_suffix"></span>
        </div>

      </el-col>

      <!--Search-->
      <el-col :md="7">
        <div class="search">
          <el-input
            size="small"
            placeholder="查询关键字">
            <el-button slot="append" icon="search"></el-button>
          </el-input>
        </div>
      </el-col>

      <el-col :md="1" :offset="10"  >


        <div class="msg">

          <el-badge :value="3" class="item">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </el-badge>
        </div>
      </el-col>

      <!-- header right area-->
      <el-col :md="1" >
        <div class="user-header">
          <el-dropdown trigger="click" menu-align="start">
            <img src="../../../static/images/b_header.jpg" width="50px" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>


        </div>


      </el-col>

    </el-row>


  </div>


</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .header {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    font-size: 14px;
    line-height: 60px;
    background-color: #324157;
    box-shadow: 2px 0 3px rgba(0, 0, 0, .5);
    z-index: 1000;
    padding: 0 32px 0 40px;
    overflow: hidden;

  }
  .header .logo {
    float: left;
    cursor: pointer;
    font-size: 22px;
  }

  .logo_prefix {
    color: #209e91;
  }

  .logo_suffix {
    color: #fff;
  }

  .header .search {
    float: left;
    color: #fff;
    font-size: 12px;
  }



  .header-right span {
    display: inline-block;
    margin-left: 14px;
    font-size: 18px;
    color: #fff;
    line-height: 1px;
    height: 18px;
    cursor: pointer;

  }


  .user-header {
    line-height: 10px;
    margin-top: 10px;
  }

  .user-header img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }



  .pop-image img {
    border-radius: 50%;
  }

  .msg{
    height: 30px;
    line-height: 20px;
    margin-top: 25px;
  }
  .msg i{
    color: #fff;
  }

</style>
