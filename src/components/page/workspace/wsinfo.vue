<template>
    <div>

      <v-page-title vtitle="工作台运行情况"></v-page-title>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div class="dataItem color1">
                <span class="ico">
                  <i class="fa fa-bar-chart"></i>
                </span>
                <span class="text">
                  <h2>1700</h2>
                  <p>指标总量</p>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">

              <div class="dataItem color2">
                <span class="ico">
                  <i class="fa fa-bar-chart"></i>
                </span>
                <span class="text">
                  <h2>240</h2>
                  <p>贴源层</p>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">

              <div class="dataItem color3">
                <span class="ico">
                  <i class="fa fa-bar-chart"></i>
                </span>
                <span class="text">
                  <h2>300G</h2>
                  <p>模型数据</p>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">

              <div class="dataItem color4">
                <span class="ico">
                  <i class="fa fa-bar-chart"></i>
                </span>
                <span class="text">
                  <h2>450</h2>
                  <p>展示层数据</p>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                  <v-bar></v-bar>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple" style="margin-top: 40px;">
                  <v-timeoline></v-timeoline>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                  <v-line></v-line>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple" style="margin-top: 60px;">
                  <v-tasklist></v-tasklist>
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
import vPageTitle from '../../common/pageTitle.vue'
import vBar from '../../common/workruninfo/bar.vue'
import vLine from '../../common/workruninfo/line.vue'
import vTimeoline from '../../common/workruninfo/timeonline.vue'
import vTasklist from '../../common/workruninfo/tasklist.vue'
export default {
    components: {
      vPageTitle,vBar,vLine,vTimeoline, vTasklist
    }
}
</script>
<style scoped>
  .dataItem{
    height: 94px;
    border-radius: 5px;
  }
  .dataItem .ico{
    color: #fff;
    opacity: .1;
    font-size: 64px;
    text-align: center;
    float: left;
    width: 35%;
    line-height: 94px;

  }
  .dataItem .text{
    color: #ffffff;
    float: left;
    width: 65%;
    font-weight: 400;
  }
  .dataItem .text h2{
    font-size: 25px;
    margin-top: 20px;
    margin-bottom:0px;
    margin-left: 20px;
  }
  .dataItem .text p{
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    margin-left: 20px;
  }
  .color1{
    background: #3598dc;
  }
  .color2{
    background: #e7505a;
  }
  .color3{
    background: #32c5d2;
  }
  .color4{
    background: #8E44AD;
  }
</style>
