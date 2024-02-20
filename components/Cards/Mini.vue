<template>
    <div
    class=""
    >
    <ClientOnly>
    <div
      class="absolute shadow-lg inset-0 bg-opacity-50 transition duration-300 ease-in-out"
    ></div>
    <div class="relative w-full h-full px-2 sm:px-2 lg:px-2 flex items-center">
      <div>
        <div class="flex space-x-2 items-center">
          <div class="rounded-md flex items-center">
            <IconsAnalytic />
          </div>
          <p> {{ period }} </p>
        </div>
        <h3 class="text-2xl font-bold"> {{ count }} </h3>
        <h3 class="italic"> Tsh {{ price }} </h3>
      </div>
    </div>
    <template #fallback>
        <div class="h-[10vh] flex items-center justify-center">
          <el-button loading></el-button>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  period: { type: String, default: 'No data' },
  count: { type: [String, Number], default: 0 },
  price: { type: [String, Number], default: 0 },
});
</script>