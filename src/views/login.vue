<template>
  <div class="loginContainer">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginFormRef"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="loginForm.username"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item label="密 码" prop="password">
        <el-input
          type="password" 
          v-model="loginForm.password"
          prefix-icon="iconfont icon-3702mima"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login" class="btnLogin">登录</el-button>
    <el-button type="primary" @click="reset">重置</el-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async(valid) => {
        if (valid) {
          const {data:res}=await this.$http.post('login',this.loginForm)
          if(res.meta.status!==200) return this.$message.error('登录失败!');
          this.$message.success('登录成功');
          console.log(res)
          // 保存token的值
          window.sessionStorage.setItem('token',res.data.token)
          this.$router.push('./home')
        } else {
          this.$message.error('账号或密码不正确');
          return false;
        }
      });
    },
    reset() {
      this.$refs.loginFormRef.resetFields();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loginContainer {
  width: 500px;
  height: 400px;
  background-color: #caf;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .el-input {
    width: 80%;
  }
  .demo-loginForm{
    margin-top: 100px;
  }
  .el-button{
    margin: 30px 20px;   
  }
  .btnLogin{
    margin-left: 150px;
  }
}
</style>
