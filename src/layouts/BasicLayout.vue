<template>
  <a-layout class="layout">
    <div class="header1" :style="{ position: 'fixed', zIndex: 1, width: '100%' }" v-if="!$route.meta.showNav">
      <div class="logo">
        <img class="logo1" src="https://d2c66kcnstz9pz.cloudfront.net/packs/media/images/logo-horizontal-5b0d5c7649d7890df3cc4c01f88a1db3.svg"/>
      </div>
      <div class="menu">
          <a-button type="text" class="item1"> <router-link to="/">首页</router-link></a-button>
          <a-button type="text" class="item2"><router-link to="/lost">失物信息</router-link></a-button>
          <a-button type="text" class="item3"><router-link to="/find">拾物信息</router-link></a-button>
          <a-button type="text" class="item4"><router-link to="/my">我的</router-link></a-button>
      </div>
      <div class="searchBox">
<!--        <a-input v-model:value="searchText" placeholder="全站搜索失物招领信息" style="border-radius: 1rem;background-color: transparent" />-->
        <button></button>
      </div>

      <button class="learn-more" style="position: relative;left: -10%px;top: -13px;font-size: 20px" @click="toEdit">
        <span class="button-text" style="font-family:'Source-Han-Ligh32096a5dad24a70';">发布启示</span>
      </button>

      <button class="learn-more" style="position: relative;left: 10%;top: -13px;font-size: 20px" v-if="getToken()" @click="toLogin">
        <span class="button-text" style="font-family:'Source-Han-Ligh32096a5dad24a70';">登录</span>
      </button>
      <button class="learn-more" style="position: relative;left: 150px;top: -13px;font-size: 20px">
      <span class="button-text" style="font-family:'Source-Han-Ligh32096a5dad24a70';" v-if="!getToken()" @click="toLogout">退出</span>
    </button>
    </div>

    <a-layout-content style="width: 100%">
      <router-view />
    </a-layout-content>
  </a-layout>
  <a-layout-footer style="text-align: center;" v-if="!$route.meta.showNav">
    失物招领项目组 ©2022&nbsp;&nbsp;
    <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022015616号-1</a>
  </a-layout-footer>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import { UserOutlined } from '@ant-design/icons-vue';
import {getCurrentUser, getCurrentUserRole} from "../services/user";
import myAxios from "../plugins/myAxios";
import {getToken} from "../utils/token";
import {storage} from "../utils/token/store";

const selectedKeys = ref(['/'])

const router = useRouter();
// let isLogin = ref(false);
const isAdmin = storage.get("role") === "admin";

const toPage = ({key}: { key: string }) => {
  router.push({
    path: key
  })
}
const toLogin = () => {
  router.push({
    path: "/login"
  })
}
const toEdit = () => {
  router.push({
    path: "/order"
  })
}

const toLogout = () => {
  const res = myAxios.post('/user/logout')
  storage.remove("token");
  storage.remove("role");
  alert('成功退出')
  router.push({path:"/login"})
}



const searchText = ref<String>('');

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', searchText.value);
};
const exit = async () => {
  await myAxios.post('user/logout');
}


</script>

<style scoped>
.logo {
  float: left;
  width: 10%;
}
.logo1{
  height: 50px;
  padding-left: 25px;
  padding-top: 12px;
  padding-right: 10px;
  float: left;
}
.header1{
  /*background-color: white;*/
  /*background: #43bff5;*/
  /*opacity:0.2;*/
  background: transparent;

  position: sticky;
}
.menu{
  padding-left: 10%;
  padding-top: 15px;
  float: left;
  width: 26%;
}
.item1{
  /*padding-left: 30px;*/
  position: relative;
  left: 30px;
  font-size: 20px;
  font-family:'Regencie';
}.item2{
  /*padding-left: 30px;*/
  position: relative;
  left: 50px;
  font-size: 20px;
  font-family:'Regencie';
}.item3{
  /*padding-left: 30px;*/
  position: relative;
  left: 70px;
  font-size: 20px;
  font-family:'Regencie';
}.item4{
  /*padding-left: 30px;*/
  position: relative;
  left: 90px;
  font-size: 20px;
  font-family:'Regencie';
}.item5{
  /*padding-left: 30px;*/
  position: relative;
  left: 110px;
  font-size: 20px;
  font-family:'Regencie';
}
.item1:hover {
  color: white;
}.item2:hover {
  color: white;
}.item3:hover {
  color: white;
}.item4:hover {
  color: white;
}.item5:hover {
  color: white;
}
.searchBox{
  float: left;
  position: relative;
  left: 10%;
  width: 400px;
  top: 15px;
  background-color: transparent;
}
input::after {
  content: "";
  clear: both;
  display: table;
}
.avatar{
  position: relative;
  float: right;
  width: 9px;
  height: 0px;
  left: -60px;
  top: 10px;
}

/* From uiverse.io */
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  left: 0px;
}

button.learn-more {
  padding-top: 8px;
  padding-left: 30px;
  width: 12rem;
  height: auto;
}

button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
}

button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  padding-left: 45px;
  padding-top: 20px;
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: #fff;
  padding-left: 45px;
}

</style>
