<template>
  <el-row class="login-form">
    <el-col :span="6" :offset="9">
      <el-card>
      <div class="choises">
        <router-link to="/login" class="switch-choise">登陆</router-link>
        <b class="dot">·</b>
        <router-link to="/register" class="switch-choise">注册</router-link>
      </div>
      <el-form>
        <el-form-item>
          <el-input v-model="userInfo.nickname" placeholder="你的昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userInfo.username" placeholder="账号名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="userInfo.password" placeholder="设置密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="register" size="large" type="success">注册</el-button>
        </el-form-item>
      </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import qs from 'qs';
export default {
  name: 'Register',
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
        nickname: ''
      }
    };
  },
  methods: {
    register() {
      this.axios.post('http://aiexamples.chinacloudsites.cn/api/account/register', qs.stringify(this.userInfo)).then((response) => {
        this.$router.push('/login');
      });
    }
  }
};
</script>

<style scope>
.login-form {
  display: flex;
  align-items: center;
  margin-top: 100px;
}
.el-card {
  width: 95%;
}

.el-checkbox {
  float: left;
}

.choises {
  margin-bottom: 40px;
  margin-top: 20px;
  font-size: 20px;
}

.router-link-active {
  border-bottom: 2px solid #ea6f5a;
  color: #ea6f5a !important;
}

.switch-choise {
  text-decoration: none;
  color: grey;
  padding-bottom: 10px;
}

.dot {
  padding: 8px;
}

.el-form-item {
  margin-bottom: 10px;
}

.el-button {
  width: 100%;
}
</style>

