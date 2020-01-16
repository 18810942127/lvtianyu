<template>
  <div class="learnReport -box-sizing -layout">
    <div class="box-card-100 -box-sizing -card -white -layout">
      <div :style="'width:100%;height:400px;'" ref="chart"></div>
    </div>
  </div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
export default {
  components: {
  },
  data() {
    return {
      chartsBarOptions: {
        title: {
          text: "学习时间"
        },
        legend: {
          show: true,
          width: 600,
          orient: "vertical",
          align: "left",
          itemWidth: 8,
          itemHeight: 8,
          data: [
            {
              name: "总学习时长(小时)",
              icon: "circle"
            },
            {
              name: "总学习有效时长(小时)",
              icon: "circle"
            }
          ],
          width: 10,
          height: 10,
          left: "right",
          textStyle: {
            color: "#aaa"
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisLine: {
            lineStyle: {
              color: "#aaa"
            }
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          data: [
            "2019.11.29",
            "2019.11.30",
            "2019.12.1",
            "2019.12.2",
            "2019.12.3",
            "2019.12.4",
            "2019.12.5"
          ]
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value",
          boundaryGap: true,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: "#aaa"
            }
          }
        },
        series: [
          {
            name: "总学习时长(小时)",
            type: "bar",
            barWidth: 8,
            itemStyle: {
              color: "#FF993C",
              barBorderRadius: [30]
            },
            data: [3, 5, 1, 3, 3, 4, 5]
          },
          {
            name: "总学习有效时长(小时)",
            type: "bar",
            barWidth: 8,
            itemStyle: {
              color: "#7ED5F9",
              barBorderRadius: [30]
            },
            data: [2, 4, 1, 1, 2, 2, 3]
          }
        ]
      }
    };
  },
  watch: {},
  mounted() {
        let myChart = echarts.init(this.$refs.chart);
    myChart.setOption(this.chartsBarOptions);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.learnReport {
  padding: 20px;
  .box-card-100 {
    width: 100%;
    height: 100%;
    padding-top: 100px;
  }
}
</style>