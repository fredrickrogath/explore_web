<script setup>
import { onMounted } from "vue";

const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 92, 93, 94, 95,],
  },
];

if (process.client) {
      // your JS code here like >> jsPlumb.ready(function () {})
    }
</script>

<template>
  <ClientOnly>
    <apexchart
      width="400"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <template #fallback>
      <div class="h-[25vh] flex items-center justify-center ml-2 my-1 mr-1">
        <el-button loading></el-button>
      </div>
    </template>
  </ClientOnly>
</template>
