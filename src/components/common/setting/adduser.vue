<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

  <el-form-item label="归属部门" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择归属部门">
      <el-option label="业务部" value="shanghai"></el-option>
      <el-option label="技术部" value="beijing"></el-option>
      <el-option label="其他" value="other"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="工号" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="性别" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>



  <el-form-item label="登录名" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="确认密码" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="邮箱" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="电话" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="手机" prop="name">
    <el-input v-model="ruleForm.name" style="width: 220px;"></el-input>
  </el-form-item>

  <el-form-item label="是否允许登录" prop="delivery">
    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
  </el-form-item>

  <el-form-item label="用户类型" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择用户类型">
      <el-option label="普通用户" value="shanghai"></el-option>
      <el-option label="高级用户" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="用户权限" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择用户权限">
      <el-option label="All" value="shanghai"></el-option>
      <el-option label="首页" value="beijing"></el-option>
      <el-option label="灵活查询" value="beijing"></el-option>
    </el-select>
  </el-form-item>



  <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
