<template>
  <div class="c-charts">
    <div id="mapChina" :style="{width: '100%', height: '600px'}"></div>
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
        let myChart = this.$echarts.init(document.getElementById('mapChina'))
        // 绘制图表
        myChart.setOption({


          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            zoom: 2.3
          },
          grid: {
            left: '0',
            right: '4%',
            top: '0',
            containLabel: true
          },
          visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            calculable: true
          },
          series: [
            {
              name: 'iphone3',
              type: 'map',
              mapType: 'china',
              roam: false,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data:[
                {name: '北京',value: this.randomData() },
                {name: '天津',value: this.randomData() },
                {name: '上海',value: this.randomData() },
                {name: '重庆',value: this.randomData() },
                {name: '河北',value: this.randomData() },
                {name: '河南',value: this.randomData() },
                {name: '云南',value: this.randomData() },
                {name: '辽宁',value: this.randomData() },
                {name: '黑龙江',value: this.randomData() },
                {name: '湖南',value: this.randomData() },
                {name: '安徽',value: this.randomData() },
                {name: '山东',value: this.randomData() },
                {name: '新疆',value: this.randomData() },
                {name: '江苏',value: this.randomData() },
                {name: '浙江',value: this.randomData() },
                {name: '江西',value: this.randomData() },
                {name: '湖北',value: this.randomData() },
                {name: '广西',value: this.randomData() },
                {name: '甘肃',value: this.randomData() },
                {name: '山西',value: this.randomData() },
                {name: '内蒙古',value: this.randomData() },
                {name: '陕西',value: this.randomData() },
                {name: '吉林',value: this.randomData() },
                {name: '福建',value: this.randomData() },
                {name: '贵州',value: this.randomData() },
                {name: '广东',value: this.randomData() },
                {name: '青海',value: this.randomData() },
                {name: '西藏',value: this.randomData() },
                {name: '四川',value: this.randomData() },
                {name: '宁夏',value: this.randomData() },
                {name: '海南',value: this.randomData() },
                {name: '台湾',value: this.randomData() },
                {name: '香港',value: this.randomData() },
                {name: '澳门',value: this.randomData() }
              ]
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



</style>
