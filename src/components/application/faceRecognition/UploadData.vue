<template>
  <div style="margin-top:50px;">
    <el-tooltip class="item" effect="dark" content="该数据会匹配您账号对应的个人图像库" placement="right-start">
      <span>请选择需要上传的图像数据</span>
    </el-tooltip>
    <el-upload action="http://localhost:8686/api/facerecognition/uploadNewPhoto" 
    list-type="picture-card" :headers="headers" :on-preview="handlePictureCardPreview" :show-file-list="true" :on-remove="handleRemove" :on-success="handleUploadSuccess" style="margin-top:50px;">
      <i class="el-icon-plus"></i>
    </el-upload>
  
    <el-dialog v-model="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
// import Guid from 'guid';

export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      headers: {
        'Authorization': this.$store.getters.token
      }
    };
  },
  methods: {
    handleRemove() {
      this.$notify({
        title: '警告',
        message: '该图片已上传,请在照片库中手动删除',
        type: 'warning'
      });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleUploadSuccess() {
      this.$notify({
        title: '成功',
        message: '上传成功',
        type: 'success'
      });
    }
  }
};
</script>

