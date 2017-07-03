<template>
  <el-menu mode="vertical" default-active="1" style="padding:0px;" :router="true">
    <el-menu-item index="1" :route="{name:'ImageDataRepo'}">
      <i class="el-icon-picture"></i>我的照片库</el-menu-item>
    <el-menu-item index="2" :route="{name:'UploadData'}">
      <i class="el-icon-menu"></i>上传新数据</el-menu-item>
    <el-menu-item index="3" :route="{name:'RecognitionTest'}">
      <i class="el-icon-loading"></i>识别率测试</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'sidebar'
};
</script>

<style scope>

</style>
