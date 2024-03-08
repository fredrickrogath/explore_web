
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"></path></svg>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SolarAltArrowLeftBroken',
  setup(props) {
    const width = ref(props.width || '22');
    const height = ref(props.height || '22');

    return {
      width,
      height
    };
  },
  props: {
    width: {
      type: String,
      default: '22'
    },
    height: {
      type: String,
      default: '22'
    }
  }
}
</script>