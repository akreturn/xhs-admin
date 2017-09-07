<template>
  <!--采集管理-->
  <div>

    <v-page-title vtitle="采集管理"></v-page-title>

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

                  <el-button type="primary" @click="onSearch">查询</el-button>
                  <el-button type="primary" @click="dialogTableVisible = true">新增</el-button>
                </el-form-item>

                <el-dialog title="指标新增" :visible.sync="dialogTableVisible">

                  <el-form :model="form">
                    <el-form-item label="任务编号">
                      <el-input v-model="form.number" style="width: 220px" placeholder="采集任务编号"
                                auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="任务名称">
                      <el-input v-model="form.name" style="width: 220px" placeholder="采集任务名称"
                                auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="采集频次">
                      <el-select v-model="form.region" placeholder="采集频次">
                        <el-option label="日" value="shanghai"></el-option>
                        <el-option label="月" value="beijing"></el-option>
                        <el-option label="季" value="shanghai"></el-option>
                        <el-option label="年" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="采集方式">
                      <el-select v-model="form.region" placeholder="采集方式">
                        <el-option label="FTP文件解析" value="shanghai"></el-option>
                        <el-option label="数据库连接" value="beijing"></el-option>
                        <el-option label="网络爬虫" value="shanghai"></el-option>
                      </el-select>

                      <el-select v-model="form.region" placeholder="数据库">
                        <el-option label="MySql数据库" value="shanghai"></el-option>
                        <el-option label="Oracle数据库" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="采集配置">
                      <el-input type="textarea" style="width: 220px" v-model="form.desc"></el-input>
                    </el-form-item>


                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  </div>

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
                  label="采集编号"
                  width="100"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="采集名称">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="采集方式">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="采集频次">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="创建时间">
                </el-table-column>

                <el-table-column
                  fixed="right"
                  label="操作"
                >
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
  import vPageTitle from '../../common/pageTitle.vue'

  export default {

    methods: {
      handleClick() {
        console.log(1);
      },
      onAdd() {
        console.log('add!');
      },
      onSearch() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '请输入查询条件 '),
          ])
        });

      },
      watch: {
        filterText(val) {
          this.$refs.tree2.filter(val);
        }
      },

      methods: {
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        }
      }

    },
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          number: '',
          name: '',

        },

        formInline: {
          user: '',
          region: ''
        },
        filterText: '',

        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [{
          date: 'CJ00001',
          name: '财政数据采集',
          province: 'Excel文件解析',
          city: '日',
          address: '2016-05-02'
        }, {
          date: 'CJ00002',
          name: '人口与资源数据采集',
          province: 'Oracle连接',
          city: '周',
          address: '2016-05-02'
        }, {
          date: 'CJ00003',
          name: '社会与科学数据采集',
          province: '结构化数据爬取',
          city: '月',
          address: '2016-05-02'
        }],
        data2: [{
          id: 1,
          label: '采集适配器',
          children: [{
            id: 4,
            label: 'FTP文件解析',
            children: [{
              id: 9,
              label: 'Excel文件解析'
            }, {
              id: 10,
              label: 'PDF文件解析'
            }, {
              id: 11,
              label: '文本解析'
            }]
          }, {
            id: 2,
            label: '数据库连接',
            children: [{
              id: 7,
              label: 'Oracle连接方式'
            }, {
              id: 8,
              label: 'Mysql连接方式'
            }]
          }, {
            id: 3,
            label: '网络爬虫',
            children: [{
              id: 5,
              label: '结构化数据爬取'
            }, {
              id: 6,
              label: '非结构化数据爬取'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    components: {
      vPageTitle
    }
  }
</script>

<style scoped>
  .tree .el-tree {
    border: none;
  }

  .tree .el-input {
    margin-bottom: 10px;
    border: none;
  }
</style>
