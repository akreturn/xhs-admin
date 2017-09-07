<template>
  <div class="c-charts">
    <div id="line" :style="{width: '100%', height: '400px'}"></div>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      randomData() {
        return Math.round(Math.random() * 1000);
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('line'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '',
            subtext: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['最高气温','最低气温']
          },
          toolbox: {
            show: false,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value',
            show : true,
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series: [
            {
              name:'指标 一',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'指标 二',
              type:'line',
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
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
