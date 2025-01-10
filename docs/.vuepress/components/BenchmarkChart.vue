<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup>
import "echarts";
import VChart from "vue-echarts";
import { ref, provide } from "vue";
import { sparkResults, blazeResults } from "../../../benchmark-result/benchmark-result.ts";

function parseCaseNames(resultStr) {
  return resultStr.split(/\s+/).filter(s => s.startsWith('q'));
}

function parseResultValues(resultStr) {
  return resultStr.split(/\s+/).filter(s => s.match(/\d+(\.\d+)/)).slice(0, -1);
}

const caseNames = parseCaseNames(sparkResults);
const sparkResultValues = parseResultValues(sparkResults);
const blazeResultValues = parseResultValues(blazeResults);

const option = ref({
  toolbox: {
    feature: {
      saveAsImage: {
        show: true,
      }
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '0%',
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        fontSize: 10
      }
    }
  },
  xAxis: {
    type: 'category',
    data: caseNames,
    axisLabel: {
      textStyle: {
        fontSize: 10
      }
    }
  },
  series: [
    {
      name: 'Spark-3.5',
      type: 'bar',
      barWidth: 2,
      data: sparkResultValues,
      markLine: {
        data: [{ type: 'average', name: 'Average' }],
      },
    }, {
      name: 'Blaze-4.0.1-preview (5651e6e)',
      type: 'bar',
      barWidth: 2,
      data: blazeResultValues,
      markLine: {
        data: [{ type: 'average', name: 'Average' }],
      },
    }
  ]
});

</script>

<style scoped>
.chart {
  height: 600px;
  width: 100%;
}
</style>
