<template>
  <el-container>

   <transition name="el-zoom-in-top">
      <el-dialog
    title="基本信息"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      <el-divider content-position="left"></el-divider>
      <span>
        <el-form :inline="true" :model="student" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="student.name" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="student.number" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="班级">
            <el-input v-model="student.class" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="student.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </span>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
   </transition>

    <el-header><i class="el-icon-menu"></i>简易学生成绩管理系统</el-header>
      <el-form :inline="true" :model="student" class="demo-form-inline">
    <el-form-item label="姓名:">
      <el-input v-model="student.name" placeholder="请输入学生姓名"></el-input>
    </el-form-item>
    <el-form-item label="学号:">
      <el-input v-model="student.number" placeholder="请输入学号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="dialogVisible = true">编辑</el-button>
    </el-form-item>
  </el-form>
    <el-main>
        <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
          <el-button type="danger" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      student: {
        name: '',
        number: '',
        class:'',
        sex:''
      },
      studentList:[]
    }
  },
  methods: {
    //学生分页列表


    onSubmit () {
      console.log('submit!')
    },
    handleClick(row) {
        console.log(row);
    }
  }
}
</script>

<style>
/* body{
  margin: 0px;
} */
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-bottom: 10px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-form{
    text-align: center;
    justify-content: center;
  }
</style>
