<template>
  <div>
    <v-page-title vtitle="指标补录"></v-page-title>

    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <div class="tree">
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText">
            </el-input>

            <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              node-key="id"
              :default-expanded-keys="[1,2,3]"
              :filter-node-method="filterNode"
              ref="tree2">
            </el-tree>
          </div>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="approval">
            <div class="app-form">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="">
                  <el-input v-model="formInline.num" placeholder="补录编号"></el-input>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="formInline.dec" placeholder="补录描述"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="addMakeup = true">新增</el-button>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>

                <el-dialog title="新增补录" size="small" :visible.sync="addMakeup">
                  <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <div style="width: 100%;margin-bottom: 10px;">


                      <el-select v-model="value7" @change="changeValue" @remove-tag="adv" style="width: 90%;" multiple placeholder="请选择指标">
                        <el-option-group
                          v-for="group in options3"
                          :key="group.label"
                          :label="group.label">
                          <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-option-group>
                      </el-select>


                    </div>
                    <div id="wocao" >
                      <div class="wctime" id="wctime" style="display: none;">
                        <el-form-item label="">
                          <el-date-picker type="date" placeholder="开始日期" v-model="formInline.date1"></el-date-picker>
                        </el-form-item>

                        <el-form-item label="">
                          <el-date-picker type="date" placeholder="结束日期" v-model="formInline.date2"></el-date-picker>
                        </el-form-item>

                        <el-form-item label="">
                          <el-select v-model="formInline.region" placeholder="请选择地域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-button type="primary" @click="vsearch">查询</el-button>
                      </div>

                      <div class="wctable" id="wctable" style="display: none;">
                        <el-table
                          :data="tableData3"
                          border
                          style="width: 100%">
                          <el-table-column
                            prop="city"
                            label="财政收入">
                          </el-table-column>
                          <el-table-column
                            prop="year1"
                            label="2015年">
                          </el-table-column>
                          <el-table-column
                            prop="year2"
                            label="2014年">
                          </el-table-column>
                          <el-table-column
                            prop="year3"
                            label="2013年">
                          </el-table-column>
                          <el-table-column
                            prop="year4"
                            label="2012年">
                          </el-table-column>
                          <el-table-column
                            prop="year5"
                            label="2011年">
                          </el-table-column>
                          <el-table-column
                            prop="year6"
                            label="2010年">
                          </el-table-column>
                          <el-table-column
                            prop="year7"
                            label="2009年">
                          </el-table-column>
                        </el-table>

                        <el-table
                          :data="tableData4"
                          border
                          style="width: 100%">
                          <el-table-column
                            prop="city"
                            label="财政支出">
                          </el-table-column>
                          <el-table-column
                            prop="year1"
                            label="2015年">
                          </el-table-column>
                          <el-table-column
                            prop="year2"
                            label="2014年">
                          </el-table-column>
                          <el-table-column
                            prop="year3"
                            label="2013年">
                          </el-table-column>
                          <el-table-column
                            prop="year4"
                            label="2012年">
                          </el-table-column>
                          <el-table-column
                            prop="year5"
                            label="2011年">
                          </el-table-column>
                          <el-table-column
                            prop="year6"
                            label="2010年">
                          </el-table-column>
                          <el-table-column
                            prop="year7"
                            label="2009年">
                          </el-table-column>
                        </el-table>
                      </div>




                    </div>
                  </el-form>
                </el-dialog>
              </el-form>
            </div>
            <div class="app-table">
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="指标编号">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="指标名称">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="补录状态">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="补录时间">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="补录人">
                </el-table-column>

                <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">修改</el-button>
                    <el-button type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>


</template>

<script>
  import axios from 'axios'
  import vPageTitle from '../../common/pageTitle.vue'
  import vTree from '../../common/eTree.vue'

  export default {
    data() {
      return {
        addMakeup: false,
        formInline: {
          user: '',
          region: '',
          date1: '',
          date2: ''
        },
        value7: '',
        options3: [{
          label: '财政',
          options: [{
            value: 'shouru',
            label: '财政收入'
          }, {
            value: 'zhichu',
            label: '财政支出'
          }]
        }, {
          label: '人口与资源',
          options: [{
            value: 'Chengdu',
            label: '民族人口'
          }, {
            value: 'Shenzhen',
            label: '占总人口比重'
          }]
        }, {
          label: '社会科学',
          options: [{
            value: 'weisheng',
            label: '卫生'
          }, {
            value: 'jiaoyu',
            label: '教育'
          }]
        }],
        data2: [{
          id: 1,
          label: '少数民族经济指标',
          children: [{
            id: 4,
            label: '财政',
            children: [{
              id: 9,
              label: '财政收入'
            }, {
              id: 10,
              label: '财政支出'
            }]
          }, {
            id: 2,
            label: '人口与资源',
            children: [{
              id: 7,
              label: '民族人口'
            }, {
              id: 8,
              label: '占总人口比重'
            }]
          }, {
            id: 3,
            label: '社会科学',
            children: [{
              id: 5,
              label: '卫生'
            }, {
              id: 6,
              label: '教育'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [{
          date: 'ZB00001',
          name: '财政收入',
          province: '已审批',
          city: '2016-05-01',
          address: '张三'
        }, {
          date: 'ZB00001',
          name: '财政支出',
          province: '待审批',
          city: '2016-05-01',
          address: '张三'
        }, {
          date: 'ZB00001',
          name: 'GDP',
          province: '已补录',
          city: '2016-05-01',
          address: '张三'
        }],
        tableData3: [{
          city: '北京市',
          year1: '239834.23',
          year2: '13458.3',
          year3: '439834.23',
          year4: '6458.3',
          year5: '39834.23',
          year6: '58.3',
          year7: '1358.3',
        }, {
          city: '上海',
          year1: '39834.23',
          year2: '16458.3',
          year3: '339834.23',
          year4: '86458.3',
          year5: '439834.23',
          year6: '358.3',
          year7: '21358.3',
        }],

        tableData4: [{
          city: '北京市',
          year1: '239834.23',
          year2: '13458.3',
          year3: '439834.23',
          year4: '6458.3',
          year5: '39834.23',
          year6: '58.3',
          year7: '1358.3',
        }, {
          city: '上海',
          year1: '39834.23',
          year2: '16458.3',
          year3: '339834.23',
          year4: '86458.3',
          year5: '439834.23',
          year6: '358.3',
          year7: '21358.3',
        }]
      }
    },
    components: {
      vPageTitle, vTree
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    methods:{

      changeValue(value) {

        var wctime = document.getElementById('wctime')
       if( value ==''){
         wctime.style.display = 'none'
       }else{
         wctime.style.display = 'block'
       }
      },
      vsearch(){
        var wctable = document.getElementById('wctable');
        wctable.style.display = 'block'
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    created: function () {
      axios.get('')
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
</script>
<style>
  .el-dialog--small {
    width: 70% !important;
  }
  .tree .el-tree{
    border:none;
  }
  .tree .el-input{
    margin-bottom:10px;
    border:none;
  }
</style>
