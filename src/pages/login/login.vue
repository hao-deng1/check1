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
            ref="formRef"
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
            <a-input v-model:value="formState.userAccount">
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
            <a-input-password v-model:value="formState.userPassword">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item><imageCheck /></a-form-item>
          <a-form-item
          >
            <a-input
              v-model:value="yanzhen"
              placeholder="请输入图形验证码"
              style="width: 150px;margin-left: 70px"
            />
          </a-form-item>
          <a-form-item style="position: relative;left: 90px">
            <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
              登录
            </a-button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">注册</a>
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
import {AES_Encrypt} from "../../utils/aes"
import {storage} from "../../utils/token/store";
import { FormInstance } from "ant-design-vue";
const formRef = ref<FormInstance>();

interface FormState {
  userAccount: string;
  userPassword: string;
}
let cookies = inject('$cookies')
const router = useRouter()
const route = useRoute()
const yanzhen = ref()


const formState = ref<FormState>({
  userAccount: '',
  userPassword: '',
});
const remember = ref(false);
const toPage = () => {
  router.push('/intro')
}
const disabled = computed(() => {
  return !(formState.value.userAccount && formState.value.userPassword);
});
const onFinish = async (values: any) => {
  validateCheckNum(yanzhen);
  storage.remove('token')
  storage.remove('role')
  const res = await myAxios.post('/user/login', {
    userAccount: formState.value.userAccount,
    userPassword: AES_Encrypt(formState.value.userPassword),
  })
  console.log(res, '用户登录');
  if (res.code === 200) {
    alert('登录成功')
    storage.set('token', res.data.token)
    storage.set('role', res.data.role)
    // setToken(res.data.tokenValue);
    router.push('/');
  } else {
    alert('登录失败')
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
    myAxios.get("/login/verifyCode/"+value).then((res) => {
      if (!res) {
        alert("验证码错误")
      }
    });
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
