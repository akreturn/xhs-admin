<template>
  <div class="c-charts">
    <div id="round" :style="{width: '100%', height: '400px'}"></div>
  </div>

</template>

<script>
  import echarts from 'echarts'

  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {

      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('round'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>
  .el-col {
    margin-bottom: 16px;
  }

  .material-icons {
    font-size: 80px;
    color: #ddd;
  }

  .cart-string {
    height: 100px;
    padding-top: 10px;
    font-size: 1.1rem;

  }

  .c-charts {
    height: 400px;
    width: 100%;
  }


</style>
