<template>
  <el-menu mode="horizontal" theme="dark" :router="true">
    <el-menu-item index="5">
      <img src="../../assets/robot.png" class="logo">
    </el-menu-item>
  
    <el-submenu index="4" style="float:right;">
      <template slot="title">分类</template>
      <el-menu-item index="4-1">SVM</el-menu-item>
    </el-submenu>
  
    <el-submenu index="3" style="margin-right:50px;float:right;">
      <template slot="title">聚类</template>
      <el-menu-item index="3-1">FCM</el-menu-item>
      <el-menu-item index="3-2">MEC</el-menu-item>
      <el-menu-item index="3-3">K-MEANS</el-menu-item>
    </el-submenu>
  
    <el-submenu index="2" style="margin-right:50px;float:right;">
      <template slot="title">降维</template>
      <el-menu-item index="2-1">PCA</el-menu-item>
      <el-menu-item index="2-2">LPP</el-menu-item>
    </el-submenu>
  
    <el-submenu index="1" style="margin-right:50px;float:right;">
      <template slot="title">应用</template>
      <el-menu-item index="1-1" :route="{name:'FaceRecognition'}">人脸识别</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      index: ''
    };
  }
};
</script>

<style scope>
.logo {
  height: 50px;
  vertical-align: middle;
  padding-bottom: 5px;
}

.el-menu {
  padding: 0 100px 0 100px;
}
</style>
