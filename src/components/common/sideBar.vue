<template>
  <div class="sidebar" id="sidebar">

    <div class="rotataIco">

    </div>
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router :collapse="isCollapse">

      <!--前台-->
      <el-submenu index="1">
        <template slot="title">
          <i class="fa fa-th-large"></i>
          <span slot="title">前台</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="chartinfo">图表信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="chinamap">数据地图</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="favorites">我的收藏夹</el-menu-item>
        </el-menu-item-group>
        <!--<el-menu-item-group>-->
        <!--<el-menu-item index="managesetting">管理设置</el-menu-item>-->
        <!--</el-menu-item-group>-->
      </el-submenu>

      <!--采集管理-->
      <el-submenu index="2">
        <template slot="title">
          <i class="fa fa-list-ul"></i>
          <span slot="title">采集管理</span>
        </template>

        <el-submenu index="2-1">
          <template slot="title">自动采集</template>
          <el-menu-item-group>
            <el-menu-item index="Adapter">适配器管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="Colconf">采集配置</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="monitor">采集监控</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="2-2">
          <template slot="title">手动采集</template>
          <el-menu-item-group>
            <el-menu-item index="Makeup">指标采集</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="Batch">批量采集</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="Approval">采集审批</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-submenu>

      <!--指标-->
      <el-submenu index="3">
        <template slot="title">
          <i class="fa fa-bar-chart"></i>
          <span slot="title">指标管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="indexmanage">指标维护</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="indexsystem">指标体系维护</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--数据应用-->
      <el-submenu index="4">
        <template slot="title">
          <i class="fa fa-clipboard"></i>
          <span slot="title">数据应用</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="modalData">数据模版</el-menu-item>
        </el-menu-item-group>

      </el-submenu>

      <!--数据检索-->
      <el-submenu index="5">
        <template slot="title">
          <i class="fa fa-search-minus"></i>
          <span slot="title">数据检索</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="flexquery">灵活查询</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="mapquery">地图查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--系统管理-->
      <el-submenu index="6">
        <template slot="title">
          <i class="fa fa-cog"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <!--<el-menu-item index="wsinfo">工作台运行情况</el-menu-item>-->
          <el-menu-item index="wsinfo">工作台运行情况</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="role">角色管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="role">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
      }
    },
    mounted(){
//      var sideBarH = document.documentElement.scrollHeight || document.body.scrollHeight;
//      window.onresize = window.onload = function() {
//        document.getElementById('sidebar').style.height =  sideBarH - 60 +'px'
//      };
    },
    computed: {

      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    },
    methods: {
      rotateSide: function () {
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>
<style>
  i.ratate {
    transform: rotate(90deg);
  }

  i.fa {
    cursor: pointer;
  }

  .sidebar {
    display: block;
    position: absolute;
    width: 200px;
    left: 0;
    top: 60px;
    bottom: 0;
    background: #324157;
    box-shadow: 1px 1px #eee;

  }

  .sidebar .fa {
    margin-right: 5px;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
