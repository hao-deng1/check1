<template>
  <!-- <div style="background-color: white;height: 100%;position: relative;top: -66px"></div>-->
  <div class="loginContainer">
    <div class="loginPage">
      <a-divider type="vertical" style="height: 60px;position: relative;
          left: 350px;top: 40px;height: 80%;" />
    </div>
    <div class="loginPage1">
      <div style="font-size: 28px;position:relative;top: -50px;left: 55px;"><i class="@font-face">Welcome To Our Site</i></div>
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        style="position: relative;left: 30px"
      >
        <a-form-item
          label="账号"
          name="userAccount"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.userAccount" placeholder="账号长度不少于6位">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="密码"
          name="userPassword"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.userPassword" placeholder="密码不少于8位">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item
          label="二次密码"
          name="checkPassword"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.checkPassword" placeholder="再次输入密码">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item style="position: relative;left: -70px;"><imageCheck /></a-form-item>
        <a-form-item
        >
          <a-input
            v-model:value="yanzhen"
            placeholder="请输入图形验证码"
            style="width: 130px;font-size: 13px;position: relative;top: -60px;left: 170px"
          />
        </a-form-item>
        <a-form-item style="position: relative;left: 120px;top: -40px">
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
            注册
          </a-button>
        </a-form-item>
      </a-form>

    </div>

    <div class="intro">
      <div style="font-size: 25px;font-weight: bold;position:relative;left: 20px;top: 80px">欢迎使用校园失物招领平台</div>
      <div style="font-size: 15px;font-weight: bold;position:relative;left: 40px;top: 120px">平台致力于为广大用户提供优质的服务</div>
      <!--        <arrow-down-outlined style="color: black;position: relative;left: 40%;fontSize: 30px;" class="down"/>-->
      <a-button type="text" class="more" style="font-size: 18px;position:relative;top: 200px;left: 78px;border-radius: 0.5rem;" @click="toPage"><span style="position: relative;top: -3px">Learn More</span></a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, inject} from "vue";
import imageCheck from "./image-check.vue"
import {useRoute, useRouter} from "vue-router";
import myAxios from "../../plugins/myAxios";
import {getCurrentUser, getCurrentUserRole} from "../../services/user";
import {setToken} from "../../utils/token"
import {storage} from "../../utils/token/store";
import { FormInstance } from "ant-design-vue";

interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword: string
}
let cookies = inject('$cookies')
const router = useRouter()
const route = useRoute()
const yanzhen = ref()


const formState = ref<FormState>({
  userAccount: '',
  userPassword: '',
  checkPassword: ''
});
const remember = ref(false);
const toPage = () => {
  router.push('/intro')
}
const disabled = computed(() => {
  return !(formState.value.userAccount && formState.value.userPassword);
});
const onFinish = async (values: any) => {
  const res1 = await myAxios.get("/login/verifyCode/${yanzhen}");
  console.log(res1.data)
  if (res1.data == false) {
    alert("验证码错误");
    return;
  }
  storage.remove('token')
  storage.remove('role')
  const res = await myAxios.post('/user/register', {
    userAccount: formState.value.userAccount,
    userPassword: formState.value.userPassword,
    checkPassword: formState.value.checkPassword
  })
  console.log(res, '用户注册');
  if (res.code === 0) {
    alert('注册成功')
    router.push('/login');
  } else {
    alert('注册失败')
  }
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const ruleFormRef = ref<FormInstance>();
// 图形验证码校验规则
const validateCheckNum = (value: string,) => {
  if (value === '') {
    alert("请输入验证码")
  } else {
    // 发送校验请求

  }
};



</script>

<style scoped>

.down{
  animation: myfirst 2s infinite;
}
.loginContainer{
  height: 900px;
  width: 100%;
  background-color: #d8e3e7;
  /*background-image: url("../assets/login.jpeg");*/
  /*background-size: 100% 100%;*/
}
.loginPage{
  /*opacity: 60%;*/
  position: relative;
  top: 15%;
  left: 28%;
  height: 50%;
  width: 50%;
  background-color: white;
  margin-top: 0px;/*和hover的margin-top有对比，原无30,现在0，相当于上移了,30px*/
  box-shadow: 0 0 20px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
}
.loginPage1{
  position: relative;
  width: 20%;
  left: 28%;
  top: -210px;
}
.checkBox{
  position: relative;
  top: -10px;
  background-color:transparent;
  font-size: 10px;
}

.sure:hover{
  margin-top: 0px;/*和hover的margin-top有对比，原无30,现在0，相当于上移了,30px*/
  box-shadow: 0 0 20px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
}

.intro{
  background-color: white;
  height: 40%;
  width: 25%;
  position: relative;
  top: -646px;
  left: 53%;
}
.more:hover{
  margin-top: 0px;/*和hover的margin-top有对比，原无30,现在0，相当于上移了,30px*/
  box-shadow: 0 0 20px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
}
</style>
