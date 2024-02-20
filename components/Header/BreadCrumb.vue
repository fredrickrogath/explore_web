<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="my-auto">
    <el-breadcrumb-item :to="{ path: '/' }">
      <span :class="breadcrumbClass" class="uppercase text-sm"> home </span>
    </el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">
      <span :class="breadcrumbClass" class="uppercase text-sm"> sales </span>
    </el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">
      <span :class="breadcrumbClass" class="uppercase text-sm"> products list </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";

const isDark = useDark();

const breadcrumbClass = computed(() => {
  return {
    'text-[#d1d5db]': isDark.value,
    'text-black': !isDark.value,
  };
});
</script>

