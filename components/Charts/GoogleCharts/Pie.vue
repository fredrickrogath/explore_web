<template>
  <div class="chart border border-gray-200 rounded-xl my-1 px-1 mx-1">
    <ClientOnly>
    <GChart
      type="PieChart"
      :settings="{ packages: ['corechart'] }"
      :data="chartData"
      :options="chartOptions.chart"
    />
    <template #fallback>
        <div class="h-[35vh] flex items-center justify-center ml-2 my-1 mr-1">
          <el-button loading></el-button>
        </div>
      </template>
    </ClientOnly>
  </div>
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
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        // ["Watch TV", 2],
        ["Sleep", 7],
      ],
      chartOptions: {
        chart: {
          title: this.title,
          is3D: true,
          //   legend: true,
          //   pieSliceText: 'label',
          width: "100%",
          height: 227,
          chartArea: { width: "70%", height: "70%" },
          legend: { position: "bottom" },
          backgroundColor: "transparent",
          // pieSliceText: "percentage",
          // pieSliceTextStyle: {
          //   //   color: 'black',
          //   // fontSize: 13,
          // },
          legend: {
            position: "bottom",
            textStyle: {
              fontSize: 13,
            },
          },
          titleTextStyle: {
            fontSize: 16,
            fontWeight: "normal",
          },
          tooltip: {
            isHtml: true,
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

<style scoped>
/* Add any scoped styles if needed */
</style>

<!-- <template>
  <div
    class="chart border border-gray-200 rounded-xl my-1 px-1 mx-1 flex items-center justify-center h-[35vh]"
  >
    <ClientOnly>
      <div v-if="isLoading" class="spinner">
        Loading...
      </div>
      <GChart
        v-else
        type="PieChart"
        :settings="{ packages: ['corechart'] }"
        :data="chartData"
        :options="chartOptions.chart"
        @ready="onChartReady"
      />
      <template #fallback>
        <div class="h-[35vh] flex items-center justify-center ml-2 mr-1">
          <el-button loading></el-button>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart,
  },
  data() {
    return {
      isLoading: true,
      chartData: [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ],
      chartOptions: {
        chart: {
          title: "Expenses",
          is3D: true,
          width: 350,
          height: 250,
          chartArea: { width: "100%", height: "70%" },
          legend: { position: "bottom" },
          backgroundColor: "transparent",
          pieSliceText: "percentage",
          pieSliceTextStyle: {
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
        },
      },
    };
  },
  methods: {
    onChartReady() {console.log('hello mm')
      // Set isLoading to false when the chart is ready
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles if needed */
.spinner {
  text-align: center;
  padding: 20px;
  font-size: 16px;
}
</style> -->
