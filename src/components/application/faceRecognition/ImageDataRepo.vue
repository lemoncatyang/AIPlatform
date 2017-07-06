<template>
  <div style="padding:50px;">
    <el-row :gutter="50">
      <el-col :span="3" v-for="imageUrl in imageUrls" :key="imageUrl"  style="margin-top:20px;">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="imageUrl" style="padding-top:20px;">
          <div style="padding: 0px;">
            <div class="bottom clearfix">
              <el-button type="text" class="button">删除</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ImageDataRepo',
  data() {
    return {
      post: null,
      error: null,
      images: [],
      imageUrls: []
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$router': 'fetchData'
  },
  methods: {
    fetchData() {
      this.axios.get('http://aiexamples.chinacloudsites.cn/api/FaceRecognition/CurrentUserRelatedPhotosList', {
        headers: {
          'Authorization': this.$store.getters.token
        }
      }).then((response) => {
        this.imageCount = response.data.length;
        for (let i = 0; i !== response.data.length; i++) {
          this.imageUrls.push('http://aiexamples.chinacloudsites.cn/api/FaceRecognition/GetImage/' + response.data[i]);
        }
        // for (let i = 0; i !== response.data.length; i++) {
        //   this.axios.get('http://aiexamples.chinacloudsites.cn/api/FaceRecognition/GetImage/' + response.data[i], {
        //     headers: {
        //       'Authorization': this.$store.getters.token
        //     },
        //     responseType: 'blob'
        //   }).then((image) => {
        //     this.images.add(image);
        //   });
        // }
      });

    }
  }
};
</script>

<style scope>

</style>

