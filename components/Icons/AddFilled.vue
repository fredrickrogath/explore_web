<template>
  <ClientOnly>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"
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
  name: "PhPlusCircleFill",
};
</script>
