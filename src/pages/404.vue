<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist." style="padding-top: 64px;">
    <template #extra>
      <a-button type="primary" @click="link">Back Home</a-button>
    </template>
  </a-result>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter();
const link = ()=>{
  router.replace('/')
}
</script>

<style scoped>

</style>
