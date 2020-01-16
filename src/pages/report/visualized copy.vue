<template>
  <div class="user -layout -box-sizing">
    <div class="box-card-100 -box-sizing -card -white -layout">
      <el-carousel height="100%" :autoplay="false">
        <el-carousel-item>
          <div :style="'width:100%;height:' + height + 'px;'" ref="chart2"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div :style="'width:100%;height:' + height + 'px;'" ref="chart"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("@/assets/js/china.js");

export default {
  components: {},
  data() {
    return {
      height: "100",
      option: {},
      option2: {}
    };
  },
  watch: {},
  mounted() {
    this.height = this.$store.state.HEIGHT;
    var data = [
      [2000, 9000],
      [2000, 8800],
      [2000, 8600],
      [2000, 8400],
      [2000, 8200],
      [2000, 8000],
      [2000, 7800],
      [2000, 7600],
      [2000, 7400],
      [2000, 7200],
      [2000, 7000],
      [2000, 6800],
      [2000, 6400],
      [2000, 6200],
      [2000, 6000],
      [2000, 5800],
      [2000, 5600],
      [2000, 5400],
      [2000, 5200],
      [2000, 5000],
      [2000, 4800],
      [2000, 4600],
      [2000, 4400],
      [2000, 4200],
      [2000, 4000],
      [2000, 3800],
      [2000, 3600],
      [2000, 3400],
      [2000, 3200],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ];
    var cities = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ];
    var barHeight = 50;
    this.option2 = {
      grid: {
        top: 100
      },
      angleAxis: {
        type: "category",
        data: cities,
        startAngle: 55,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitNumber: 1
      },
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          { value: 1, color: "#4AF6FC" },
          { value: 2, color: "#4AE7FC" },
          { value: 3, color: "#4ADEFC" },
          { value: 4, color: "#4ADBFC" },
          { value: 5, color: "#4ACCFC" },
          { value: 6, color: "#4AC4FC" },
          { value: 7, color: "#4AAFFC" },
          { value: 8, color: "#4AA3FC" },
          { value: 9, color: "#4A90FC" },
          { value: 10, color: "#4A87FC" },
          { value: 11, color: "#4A7BFC" },
          { value: 12, color: "#4A73FC" },
          { value: 13, color: "#4A6CFC" },
          { value: 14, color: "#4A5EFC" },
          { value: 15, color: "#4A58FC" },
          { value: 16, color: "#4A4AFC" },
          { value: 17, color: "#574AFC" },
          { value: 18, color: "#644AFC" },
          { value: 19, color: "#604AFC" },
          { value: 20, color: "#634AFC" },
          { value: 21, color: "#704AFC" },
          { value: 22, color: "#794AFC" },
          { value: 23, color: "#8A4AFC" },
          { value: 24, color: "#9F4AFC" },
          { value: 25, color: "#BD4AFC" },
          { value: 26, color: "#D94AFC" },
          { value: 27, color: "#E94AFC" },
          { value: 28, color: "#F44AFC" },
          { value: 29, color: "#F84AFC" },
          { value: 30, color: "transparent" },
          { value: 31, color: "transparent" },
          { value: 32, color: "transparent" },
          { value: 33, color: "transparent" },
          { value: 34, color: "transparent" },
          { value: 35, color: "transparent" },
          { value: 36, color: "transparent" }
        ]
      },
      radiusAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitNumber: 5
      },
      tooltip: {
        show: true,
        formatter: function(params) {
          var id = params.dataIndex;
          return (
            cities[id] + "<br>最低：" + data[id][0] + "<br>最高：" + data[id][1]
          );
        }
      },
      polar: {},
      series: [
        {
          type: "bar",
          z: 5,
          itemStyle: {
            normal: {
              color: "transparent"
            }
          },
          data: data.map(function(d) {
            return d[0];
          }),
          coordinateSystem: "polar",
          stack: "最大最小值"
        },
        {
          type: "bar",
          data: data.map(function(d) {
            return d[1] - d[0];
          }),
          coordinateSystem: "polar",
          name: "价格范围",
          stack: "最大最小值",
          itemStyle: {
            shadowColor: "rgba(82, 63, 105, .05)",
            shadowBlur: 5
          }
        }
      ]
    };

    var dataList = [
      {
        value: [
          // 数据项值
          116.46, // 地理坐标，经度
          39.92,
          10
        ]
      },
      {
        value: [
          // 数据项值
          118.46, // 地理坐标，经度
          40.92,
          12
        ]
      },
      {
        value: [
          // 数据项值
          117.25, // 地理坐标，经度
          39.87,
          5
        ]
      },
      {
        value: [
          // 数据项值
          116.34, // 地理坐标，经度
          38.88,
          3
        ]
      },
      {
        value: [
          // 数据项值
          116.42, // 地理坐标，经度
          39.95,
          4
        ]
      },
      {
        value: [
          // 数据项值
          118.31, // 地理坐标，经度
          40.62,
          2
        ]
      },
      {
        value: [
          // 数据项值
          117.15, // 地理坐标，经度
          39.75,
          14
        ]
      },
      {
        value: [
          // 数据项值
          116.3, // 地理坐标，经度
          38.89,
          13
        ]
      }
    ];

    // 绘制图表，准备数据
    this.option = {
      visualMap: {
        min: 0,
        max: 15,
        left: "left",
        top: "bottom",
        text: ["高", "低"],
        inRange: {
          color: ["#43ADFF", "#C0FFFF"]
        },
        show: true
      },
      geo: {
        map: "china",
        itemStyle: {
          normal: {
            areaColor: "#0F23BF",
            borderColor: "#293ABD"
          },
          emphasis: {
            areaColor: "#2a333d"
          }
        },
        silent: true
      },
      backgroundColor: "#04041C",
      series: [
        {
          name: "信息量",
          type: "heatmap",
          coordinateSystem: "geo",
          data: dataList,
          pointSize: 1,
          blurSize: 0,
          itemStyle: {
            color: "#fff"
          }
        }
      ]
    };
  },
  updated() {
    //初始化echarts实例
    var myChart = echarts.init(this.$refs.chart);
    var myChart2 = echarts.init(this.$refs.chart2);
    //使用制定的配置项和数据显示图表
    myChart.setOption(this.option);
    myChart2.setOption(this.option2);
  },
  destroyed() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.user {
  padding: 20px;
  .el-carousel {
    height: 100%;
  }
  .box-card-100 {
    width: 100%;
    height: 100%;
  }
  .pi {
    position: relative;
    width: 400px;
    margin: 0 auto;
    .p1 {
      width: 48px;
      height: 248px;
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      transform-origin: bottom center;
      div {
        position: absolute;
        bottom: 100px;
        left: 0;
        width: 16px;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        background: linear-gradient(#e66465, #9198e5);
        span {
          position: absolute;
          left: 0;
          bottom: 0;
          text-align: center;
          color: #fff;
        }
      }
    }
    .p2 {
      width: 494px;
      height: 494px;
      position: absolute;
      top: 0;
      left: -224px;
      border: 1px solid #eee;
      border-radius: 50%;
      background-blend-mode: screen, multiply;
    }
  }
}
</style>