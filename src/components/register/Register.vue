<template>
  <el-row>
    <el-col :span="6" :offset="9">
      <el-card></el-card>
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
import * as types from '../.././store/types';
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

    },
    login() {
      this.userInfo.grant_type = 'password';
      this.axios.post('http://localhost:8686/api/authorization/token', qs.stringify(this.userInfo), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        this.$store.commit(types.LOGIN, response.data);
        this.axios.defaults.headers.common['Authorization'] = this.$store.getters.token;
        this.$router.push('application');
      });
    }
  }
};
</script>

<style scope>
.el-row {
  display: flex;
  align-items: center;
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

