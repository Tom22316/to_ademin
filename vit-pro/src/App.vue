<!-- App.vue最好是不要写很复杂的东西，它是根组件会影响全局 -->

<script setup lang="ts">
import { useTheme } from "./hooks/useTheme";
// 设置element-plus为中文
import zhCn from "element-plus/es/locale/lang/zh-cn"

// 对 useTheme() 解构提取initTheme()方法
const { initTheme } = useTheme()

/** 初始化主题 */
initTheme()

</script>

<template>
  <!-- el-config-provider 是 Element Plus 提供的一个组件，用于为子组件提供全局配置选项，如语言和主题等 在此设置为中文-->
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
