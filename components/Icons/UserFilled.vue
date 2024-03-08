<template>
  <ClientOnly>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8zM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5"
      ></path>
    </svg>
    <template #fallback>
      <div class="h-[1vh] mb-4 flex items-center justify-center text-center my-2">
        <el-button loading round></el-button>
      </div>
    </template>
  </ClientOnly>
</template>

<script>
export default {
  name: "FluentPerson16Filled",
};
</script>
