<template>
    <div id="role">
        <el-container>
        <el-header>木兰词</el-header>
        <el-main>人生若只如初见，何事秋风悲画扇</el-main>
        <el-footer>清明记</el-footer>
        </el-container>
    </div>
</template>
<script>
export default {
    name:'role'
}
</script>
<style scoped>
  #role {
       margin-top: -20px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 300px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
