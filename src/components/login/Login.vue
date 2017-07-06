<template>
  <transition name="el-fade-in">
    <el-row v-show="show">
      <el-col :span="6" :offset="9" class="login-form">
        <el-card>
          <div class="choises">
            <router-link to="/login" class="switch-choise">登陆</router-link>
            <b class="dot">·</b>
            <router-link to="/register" class="switch-choise">注册</router-link>
          </div>
          <el-form>
            <el-form-item>
              <el-input v-model="userInfo.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="userInfo.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="rememberMeChecked">记住我</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" size="large">登陆</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </transition>
</template>

<script>
import qs from 'qs';
import * as types from '../.././store/types';
export default {
  name: 'Login',
  data() {
    return {
      show: true,
      userInfo: {
        username: '',
        password: ''
      },
      rememberMeChecked: ''
    };
  },
  methods: {
    login() {
      this.userInfo.grant_type = 'password';
      this.$http.post('authorization/token', qs.stringify(this.userInfo), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        this.$store.commit(types.LOGIN, response.data);
        this.$http.defaults.headers.common['Authorization'] = this.$store.getters.token;
        this.$router.push('application');
      }).catch(() => {
        this.$message({
          message: '密码或账号错误',
          type: 'error',
          duration: 1000
        });
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

