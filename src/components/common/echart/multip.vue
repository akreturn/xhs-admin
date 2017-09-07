<template>
  <div class="c-charts">
    <div id="multip" :style="{width: '100%', height: '400px'}"></div>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        colors:['#5793f3', '#d14a61', '#675bba']
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {

      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('multip'))
        // 绘制图表
        myChart.setOption({
          color: this.colors,
          title:{
            title: '23'
          },

          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            },
            show: true,
            feature: {
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},

            }
          },
          legend: {
            data:['2015 GDP', '2016 GDP']
          },
          grid: {
            top: 70,
            bottom: 50
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: this.colors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return 'GDP  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: this.colors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return 'GDP  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name:'2015 GDP',
              type:'line',
              xAxisIndex: 1,
              smooth: true,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name:'2016 GDP',
              type:'line',
              smooth: true,
              data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
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
