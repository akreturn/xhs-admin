import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
//import Mapchart from '@/components/page/workspace/mapchart', //数据地图

import Hello from '@/components/Hello'

import Chinamap from '@/components/page/workspace/chinamap' //数据地图
import Chartinfo from '@/components/page/workspace/chartinfo' //图表信息
import Wsinfo from '@/components/page/workspace/wsinfo' //工作台运行情况
import Favorites from '@/components/page/favorites' //收藏夹
import Managesetting from '@/components/page/managesetting' //管理设置

import Detail from '@/components/common/workspace/detail'



import Indexmanage from '@/components/page/index/Indexmanage' //指标维护
import Indexsystem from '@/components/page/index/indexsystem' //指标体系维护

import Flexquery from '@/components/page/flex/flexquery' //灵活查询
import Mapquery from '@/components/page/flex/mapquery' //地图查询


import Approval from '@/components/page/record/approval' //补录审批
import Batch from '@/components/page/record/batch' //批量补录
import Makeup from '@/components/page/record/makeup' //补录审批

import Adapter from '@/components/page/collec/adapter' //适配器管理
import Colconf from '@/components/page/collec/colconf' //采集配置
import Monitor from '@/components/page/collec/monitor' //采集监控

import Role from '@/components/page/setting/role' //采集监控

import EconData from '@/components/page/econData' //经济数据
import ModalData from '@/components/page/modalData' //经济数据模版



Vue.use(Router)

export default new Router({
 //mode:'histrory', //去除地址栏#
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        { path:'/', component:Chartinfo},
        { path: '/hello',component: Hello},
        { path: '/favorites',component: Favorites},
        { path: '/chinamap',component: Chinamap},
        { path: '/detail/',name:'detail',component: Detail},
         //{ path: '/detail',name:'detail',component: Detail},
        { path: '/managesetting',component: Managesetting},
        { path: '/indexmanage',component: Indexmanage},
        { path: '/indexsystem',component: Indexsystem},
        { path: '/flexquery',component: Flexquery},
        { path: '/mapquery',component: Mapquery},
        { path: '/wsinfo',component: Wsinfo},
        { path: '/chartinfo',component: Chartinfo},
        { path: '/approval',component: Approval},
        { path: '/batch',component: Batch},
        { path: '/makeup',component: Makeup},
        { path: '/adapter',component: Adapter},
        { path: '/colconf',component: Colconf},
        { path: '/monitor',component: Monitor},
        { path: '/role',component: Role},
        { path: '/econData',component: EconData},
        { path: '/modalData',component: ModalData}
      ]
    }
  ]
})
