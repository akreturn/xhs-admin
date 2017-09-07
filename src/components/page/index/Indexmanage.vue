<template>
  <div>
    <v-page-title vtitle="指标维护"></v-page-title>

    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple">

          <v-tree></v-tree>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <div class="approval">
            <div class="app-form">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="">
                  <el-input v-model="formInline.num" placeholder="指标编号"></el-input>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="formInline.dec" placeholder="指标名称"></el-input>
                </el-form-item>
                <el-button type="primary" @click="addFrom = true">新增</el-button>
              </el-form>

              <el-dialog title="指标新增" :visible.sync="addFrom">
                <el-form :model="form">

                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <el-form-item label="" :label-width="formLabelWidth">
                          <el-input v-model="form.name" placeholder="指标编号" auto-complete="off"></el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <el-form-item label="" :label-width="formLabelWidth">
                          <el-input v-model="form.name" placeholder="指标名称" auto-complete="off"></el-input>
                        </el-form-item>

                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <el-form-item label="" :label-width="formLabelWidth">
                          <el-input v-model="form.name" placeholder="指标类型" auto-complete="off"></el-input>
                        </el-form-item>

                      </div>
                    </el-col>
                  </el-row>

                  <el-row :gutter="20">
                    <el-col :span="24">
                      <div class="grid-content bg-purple">
                        <el-form-item label="" :label-width="formLabelWidth">
                          <el-table>
                            <el-table-column property="date" label="日期" width="100"></el-table-column>
                            <el-table-column property="name" label="纬度名称" width="150"></el-table-column>
                            <el-table-column property="type" label="纬度类型"></el-table-column>
                            <el-table-column property="edit" label="操作" width="80"></el-table-column>
                          </el-table>
                        </el-form-item>
                      </div>
                    </el-col>
                  </el-row>

                  <el-row :gutter="20">
                    <el-col :span="12">
                      <div class="grid-content bg-purple">
                        <el-form-item label="指标来源定义">
                          <el-checkbox-group v-model="form.type">
                            <el-checkbox label="国家统计局" name="type"></el-checkbox>
                            <el-checkbox label="路透社" name="type"></el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple">

                        <el-form-item label="取值策略">
                          <el-select v-model="form.region" placeholder="">
                            <el-option label="最新时间" value="shanghai"></el-option>
                            <el-option label="来源" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </el-col>
                  </el-row>


                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="addFrom = false">取 消</el-button>
                  <el-button type="primary" @click="addFrom = false">确 定</el-button>
                </div>
              </el-dialog>
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
                    label="指标类型">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="创建人">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="创建时间">
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
        </div>
      </el-col>
    </el-row>

  </div>


</template>
<style scoped>
  .el-form-item__content {
    margin-left: 0 !important;
  }
</style>

<script>
  import axios from 'axios'
  import vPageTitle from '../../common/pageTitle.vue'
  import vTree from '../../common/eTree.vue'

  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [],
        addFrom: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: ''
      }
    },
    components: {
      vPageTitle, vTree
    },

    methods: {
      handleClick() {
        console.log(1);
      },
      onSubmit() {
        console.log('submit!');
      },

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
