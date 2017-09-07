// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import echarts from 'echarts'
import china from 'echarts/map/js/china'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'

var ElTreeGrid = require('element-tree-grid');
Vue.component(ElTreeGrid.name,ElTreeGrid);



Vue.use(ElementUI)
Vue.use(echarts)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
