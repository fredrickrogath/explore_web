<script setup>
import { watch, onMounted } from "vue";

const isDark = useDark();
watch(isDark, (newValue) => {
    console.log(chartOptionsArea.value.xaxis.labels.style)
    // chartOptionsArea.value.xaxis.labels.style.colors = newValue ? "#FF0000" : "#00FF00";
});

function generateYearlyData(startYear, endYear, yrange) {
  var series = [];
  for (var year = startYear; year <= endYear; year++) {
    var x = new Date(year, 0, 1).getTime(); // January 1st of the current year
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
  }
  return series;
}

const startYear = 2010;
const endYear = 2022;

const chartOptionsArea = ref({
  chart: {
    id: "yt",
    group: "social",
    type: "area",
    height: 0,
  },
  colors: ["#546E7A"],
  xaxis: {
    type: "datetime",
    labels: {
      formatter: function (val) {
        const date = new Date(val);
        return (
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          date.getDate().toString().padStart(2, "0")
        );
      },
    },
  },
});

const seriesArea = [
  {
    data: generateYearlyData(startYear, endYear, {
      min: 10,
      max: 60,
    }),
  },
];

const chartOptionsSmall = {
  chart: {
    id: "ig",
    group: "social",
    type: "area",
    height: 0,
    width: 300,
  },
  colors: ["#546E7A"],
  xaxis: {
    type: "datetime",
    labels: {
      formatter: function (val) {
        const date = new Date(val);
        return (
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          date.getDate().toString().padStart(2, "0")
        );
      },
      style: {
        colors: "#FF0000", // Red color for x-axis labels
      },
    },
  },
};

const seriesSmall = [
  {
    data: generateYearlyData(startYear, endYear, {
      min: 10,
      max: 60,
    }),
  },
];

const chartOptionsSmall2 = {
  chart: {
    id: "li",
    group: "social",
    type: "area",
    height: 0,
    width: 300,
  },
  colors: ["#546E7A"],
  xaxis: {
    type: "datetime",
    labels: {
      formatter: function (val) {
        const date = new Date(val);
        return (
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          date.getDate().toString().padStart(2, "0")
        );
      },
    },
  },
};

const seriesSmall2 = [
  {
    data: generateYearlyData(startYear, endYear, {
      min: 10,
      max: 60,
    }),
  },
];
</script>

<template>
  <ClientOnly>
    <div id="wrapper">
      <div id="chart-area">
        <apexchart
          type="area"
          height="190"
          :options="chartOptionsArea"
          :series="seriesArea"
        ></apexchart>
      </div>
      <div class="columns">
        <div id="chart-small">
          <apexchart
            type="area"
            height="190"
            :options="chartOptionsSmall"
            :series="seriesSmall"
          ></apexchart>
        </div>
        <div id="chart-small2">
          <apexchart
            type="area"
            height="190"
            :options="chartOptionsSmall2"
            :series="seriesSmall2"
          ></apexchart>
        </div>
      </div>
    </div>

    <template #fallback>
      <div class="h-[70vh] flex items-center justify-center ml-2 my-1 mr-1">
        <el-button loading></el-button>
      </div>
    </template>
  </ClientOnly>
</template>

