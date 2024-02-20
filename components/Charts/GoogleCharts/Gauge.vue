<template>
    <ClientOnly>
        <div id="gauge" class="chart border border-gray-200 rounded-xl my-1 px-1 mx-1">
      <GChart
        :settings="{ packages: ['corechart', 'gauge'] }"
        type="Gauge"
        :data="data"
        :options="options"
        />
    </div>
    <template #fallback>
      <div class="h-[25vh] flex items-center justify-center border border-gray-200 rounded-xl my-1 px-1 mx-1 ml-2 my-1 mr-1">
        <el-button loading></el-button>
      </div>
    </template>
  </ClientOnly>
  </template>
  
  <script>
  import { GChart } from "vue-google-charts";
  
  export default {
    props: ['title'],
    components: {
      GChart,
    },
    data() {
      return {
        data: [["Label", "Value",],[this.title,85]],
        options: {
          min: 0,
          max: 100,
          majorTicks: ["0", "20", "40", "60", "80", "100"],
          minorTicks: 5,
          colors: ["blue"],
          theme: 'material',
          width: 0,
            height: 150,
        },
      };
    },
  };
  </script>