<template>
  <ClientOnly>
    <div class="chart border border-gray-200 rounded-xl my-1 px-1 mx-1">
      <GChart
        type="LineChart"
        :settings="{ packages: ['corechart'] }"
        :data="chartData"
        :options="chartOptions.chart"
      />
    </div>
    <template #fallback>
      <div class="h-[25vh] flex items-center justify-center ml-2 my-1 mr-1">
        <el-button loading></el-button>
      </div>
    </template>
  </ClientOnly>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  props: ["title"],
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [
        ["Year", "Sales", "Expenses"],
        ["Jan", 1000, 400],
        ["Feb", 1170, 460],
        ["Mar", 660, 1120],
        ["Apr", 1030, 540],
        ["May", 800, 300],
        ["Jun", 1200, 600],
        ["Jul", 1500, 800],
        ["Aug", 900, 400],
        ["Sep", 1300, 700],
        ["Oct", 1100, 500],
        ["Nov", 1200, 600],
        ["Dec", 660, 1120],
      ],
      chartOptions: {
        chart: {
          title: this.title,
          // is3D: true,
          //   legend: true,
          //   pieSliceText: 'label',
          width: "100%",
          height: 290,
          chartArea: { width: "90%", height: "70%" },
          // legend: { position: "bottom" },
          backgroundColor: "transparent",
          // pieSliceText: "percentage",
          pieSliceTextStyle: {
            //   color: 'black',
            fontSize: 13,
          },
          legend: {
            position: "bottom",
            textStyle: {
              fontSize: 13,
            },
          },
          titleTextStyle: {
            fontSize: 15,
            fontWeight: "normal",
          },
          tooltip: {
            textStyle: {
              fontSize: 14,
            },
          },
        },
      },
    };
  },
};
</script>
