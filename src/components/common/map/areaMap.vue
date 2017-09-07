<template>
  <div id='areaMap'>

    <div class="search">

      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-date-picker type="date" placeholder="查询年份" v-model="formInline.date1" ></el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="">查询</el-button>
          <el-button type="" @click="back">返回</el-button>
        </el-form-item>
      </el-form>

    </div>

    <div class='main'></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import axios from 'axios'
  import areaCode from './areaCode.json'
  export default {
    name: 'areaMap',
    data () {
      return {
        formInline:{
          date1: '',
          date2: ''
        },
        myChart: {},
        history: [],
        labelLevel: null
      }
    },
    props: {
      tipFormater: {
        type: Function,
        default: function (params) {
          return params.name
        }
      },
      labelDisplayLevel: [ Number ]
    },
    mounted () {
      this.initMap('100000', this.tipFormater, this.labelDisplayLevel)
      this.history.push('100000')
    },
    methods: {
      initMap (areaCode, formatter, labelLevel) {
        console.log(typeof labelLevel)
        if (typeof labelLevel === 'undefined') {
          labelLevel = 1
        }

        axios.get('static/mapdata/' + areaCode + '.json').then((res) => {
          echarts.registerMap(areaCode, res.data)
          this.myChart = echarts.init(document.querySelector('.main'))
          this.myChart.on('mapselectchanged', (params) => {
            this.mapselectchanged(params)
          })
          let labelshow = this.history.length > labelLevel
          this.myChart.setOption({
            tooltip: {
              backgroundColor: 'black',
              trigger: 'item',
              formatter: formatter
            },
            series: [{
              type: 'map',
              map: areaCode,
              label: {
                normal: {
                  show: labelshow
                },
                emphasis: {
                  show: true
                }
              }
            }],
            type: 'map',
            selectedMode: 'single'
          })
        })
      },
      mapselectchanged (params) {
        let len = this.history.length
        if (len < 3) {
          this.history.push(areaCode[params.batch[0].name])
          this.initMap(areaCode[params.batch[0].name], this.tipFormater, this.labelDisplayLevel)
        }
      },
      back () {
        if (this.history.length > 1) {
          this.history.pop()
          this.initMap(this.history[this.history.length - 1], this.tipFormater, this.labelDisplayLevel)
        }
      }
    }
  }
</script>
<style scoped>
  .main {
    width: 1000px;
    height: 800px;
  }
  .demo-form-inline{
    text-align: center;
    margin:  0 auto;
  }
</style>

