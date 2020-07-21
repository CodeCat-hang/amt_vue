<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-tickets"></i>成绩管理</template>
        </el-submenu>
        <el-menu-item-group>
              <el-menu-item index="/students/index">学生信息</el-menu-item>
              <el-menu-item index="/articles/create">数据可视化</el-menu-item>
          </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          学生成绩管理系统 <i class="el-icon-setting" style="margin-right: 15px"></i>
        </el-dropdown>
        
      </el-header>
      <el-main>
       <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    text-align: center;
    margin-bottom: 10px;
  }
  .el-aside {
    color: #333;
  }
</style>
<script>
export default {
  data () {
   
    return {
     
    }
  }
}
</script>

