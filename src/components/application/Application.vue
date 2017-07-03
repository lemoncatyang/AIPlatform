<template>
  <div>
    <el-row>
      <el-col>
        <navbar></navbar>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <sidebar></sidebar>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navbar from '@/components/navbar/Navbar';
import sidebar from '@/components/sidebar/Sidebar';
export default {
  name: 'application',
  components: { navbar, sidebar }
};
</script>

<style>

</style>
