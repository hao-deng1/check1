<template>
  <div style=" height: 674px;
  width: 100%;;background-color: white">
    <div style="position:relative;top: 60px;width: 60%;left: 18%">
      <h1 style="font-weight: bold;position:relative;left: 45.5%">关于我们</h1>
      <a-divider style="position: relative;">111</a-divider>
      <div style="height: 500px">
        xxxxxx...
      </div>

    </div>
    <a-button type="primary" @click="onClick" style="position: relative;left: 46%">了解</a-button>
  </div>

  <a-layout-footer style="text-align: center;">
    失物招领项目组 ©2022
  </a-layout-footer>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const onClick = () => {
  router.back();
};

</script>

<style scoped>

</style>