<script setup>
import { onMounted } from "vue";

const chartOptions = {
  chart: {
    width: 380,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: true,
    // formatter: function (val) {
    //   return val;
    // },
  },
  fill: {
    type: "gradient",
    // colors: [],
    opacity: 1,
  },
  legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  },
  title: {
    text: "Gradient Donut with custom Start-angle",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
const series = [44, 55, 41, 17, 15];

if (process.client) {
  // your JS code here like >> jsPlumb.ready(function () {})
}
</script>

<template>
  <ClientOnly>
    <apexchart
      type="donut"
      width="380"
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
