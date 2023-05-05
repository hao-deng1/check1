<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue";
import {nextTick, provide, ref} from "vue";
const isRouterAlive = ref(true)
const reload = () =>{
  isRouterAlive.value = false
  nextTick(()=>{
    isRouterAlive.value = true
  })
}
provide('reload',reload)
</script>

<template>
<BasicLayout v-if="isRouterAlive"/>
</template>

<style scoped>

</style>
