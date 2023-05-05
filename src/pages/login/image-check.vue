<template>
  <div style="margin-left: 70px">
    <img :src="image" style="height: 40px" @click="changeImage" />
    <span @click="changeImage" style="font-size: 10px;margin-left: 10px">点击换一张</span>
  </div>
</template>

<script setup lang="ts">
// 图片url
import { ref } from "vue";

// const image = ref("http://localhost:7529/api/login/authCode/1");  // 此处为图片生成接口的完整路径
const image = ref("http://43.142.109.127:7529/api/login/authCode/1");  // 此处为图片生成接口的完整路径

// 更换图片方法
const changeImage = () => {
  // image.value = 'http://localhost:7529/api/login/authCode/' + getNowTime();
  image.value = 'http://43.142.109.127:7529/api/login/authCode/' + getNowTime();
};
// 加一个当前时间，确保每次刷新都可以重新发送请求
function getNowTime() {
  var date = new Date();
  //年 getFullYear()：四位数字返回年份
  var year = date.getFullYear(); //getFullYear()代替getYear()
  //月 getMonth()：0 ~ 11
  var month = date.getMonth() + 1;
  //日 getDate()：(1 ~ 31)
  var day = date.getDate();
  //时 getHours()：(0 ~ 23)
  var hour = date.getHours();
  //分 getMinutes()： (0 ~ 59)
  var minute = date.getMinutes();
  //秒 getSeconds()：(0 ~ 59)
  var second = date.getSeconds();

  var time = '当前时间是：' + year + month + day + hour + minute + second;
  return time;
}
</script>

<style scoped>

</style>
