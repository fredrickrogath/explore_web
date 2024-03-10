<template>
  <ClientOnly>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width" :height="height"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"
      ></path>
    </svg>
    <template #fallback>
      <div :class="margin" class="h-[1vh] flex items-center justify-center text-center my-2">
        <el-button loading round></el-button>
      </div>
    </template>
  </ClientOnly>
</template>

<script>
export default {
  name: 'PhMagnifyingGlass',
  setup(props) {
    const width = ref(props.width || '30');
    const height = ref(props.height || '30');
    const margin = ref(props.margin || 'mb-4');

    return {
      width,
      height
    };
  },
  props: {
    width: {
      type: String,
      default: '30'
    },
    height: {
      type: String,
      default: '30'
    },
    margin: {
      type: String,
      default: 'mb-4'
    }
  }
}
</script>