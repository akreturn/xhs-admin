<template>
  <div class="modal-data">

    <v-page-title vtitle="我的模版区"></v-page-title>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <div class="dataItem">
            <img src="http://echarts.baidu.com/gallery/data/thumb/multiple-x-axis.png" alt="">
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span>我的模版1</span>
              <el-button size="small" type="primary" class="button">进入</el-button>
              <el-button size="small" type="" class="button">共享</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <div class="dataItem">
            <img src="http://echarts.baidu.com/gallery/data/thumb/bar-gradient.png" alt="">
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span>我的模版2</span>
              <el-button size="small" type="primary" class="button">进入</el-button>
              <el-button size="small" type="" class="button">共享</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <div class="dataItem">
            <img src="http://echarts.baidu.com/gallery/data/thumb/line-stack.png" alt="">
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span>我的模版3</span>
              <el-button size="small" type="primary" class="button">进入</el-button>
              <el-button size="small" type="" class="button">共享</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <div class="dataItem">
            <img src="http://echarts.baidu.com/gallery/data/thumb/scatter-logarithmic-regression.png" alt="">
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span>我的模版3</span>
              <el-button size="small" type="primary" class="button">
                <router-link to="/econData">进入</router-link>
              </el-button>
              <el-button size="small" type="" class="button">共享</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <div class="dataItem">
            <img src="http://echarts.baidu.com/gallery/data/thumb/radar-multiple.png" alt="">
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span>我的模版3</span>
              <el-button size="small" type="primary" class="button">进入</el-button>
              <el-button size="small" type="" class="button">共享</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <div class="dataItem">
            <img src="http://echarts.baidu.com/gallery/data/thumb/grid-multiple.png" alt="">
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span>我的模版3</span>
              <el-button size="small" type="primary" class="button">进入</el-button>
              <el-button size="small" type="" class="button">共享</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>

  import vPageTitle from '../common/pageTitle.vue'

  export default {
    data() {
      return {};
    },
    components: {
      vPageTitle
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }

  .dataItem {
    height: 150px;
    padding: 10px;
  }

  .dataItem i {
    font-size: 140px;
    text-align: center;
  }

  .dataItem img {
    width: 100%;
    height: 170px;

    display: block;
  }

  .bottom {
    margin-top: 15px;
    line-height: 12px;
    height: 28px;
    line-height: 28px;
  }

  .button {
    float: right;
    margin-right: 5px;
  }

  button a:link, button a:active, button a:visited {
    color: #fff;
    text-decoration: none;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

