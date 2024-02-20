<template>
  <div id="divider" class="bg-gray-200" :class="[`w-[${props.size}px]`, themeClass]"></div>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue';

// const isDark = useDark();

const themeClass = computed(() => {
  return {
    // 'bg-[#6b7280]': isDark.value,
    // 'bg-black': !isDark.value,
  };
});

const props = defineProps({
  size: { type: [String, Number], default: '2' },
});

// console.log(props.size)
</script>

