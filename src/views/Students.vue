<template>
    <div>
      <el-table :data="students">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="number" label="学号"></el-table-column>
        <el-table-column prop="class" label="专业班级"></el-table-column>
        <el-table-column prop="Math" label="高等数学"></el-table-column>
        <el-table-column prop="Physics" label="大学物理"></el-table-column>
        <el-table-column prop="cProgramming" label="C语言程序设计"></el-table-column>
        <el-table-column prop="DataBase" label="数据库原理与应用"></el-table-column>
        <el-table-column prop="OperatingSystem" label="操作系统"></el-table-column>
        <el-table-column prop="Java" label="Java程序设计"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150px"
        >
          <template slot-scope="scope">
            <el-button @click="edit(scope.row._id)" type="success" size="small">编辑</el-button>
            <el-button @click="remove(scope.row._id)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      students:[]
    }
  },
  created(){
      this.fetch();
  },
  methods:{
    remove(id){
      this.$http.delete(`students/${id}`).then(res=>{
        this.$message({
          message:"这条信息已删除",
          type:"success"
        });
        this.fetch();
      });
    },
    // edit(id){
    //   this.$router.push(`/`)
    // },
    fetch(){
      this.$http.get('students').then(res=>{
        this.students=res.data;
      });
    },
  }
}
</script>
