<template>
  <div class="user -layout -box-sizing">
    <div class="box-card-100 -box-sizing -card -white -layout">
      <el-carousel height="100%" @change="carouselChange">
        <el-carousel-item>
          <div class="pi">
            <div
              class="p1 -transition"
              v-for="(item,index) in color"
              :key="index"
              :style="isChange ? 'transform: rotate(' + (index * 14 + 35) + 'deg);' : 'transform: rotate(0deg);'"
            >
              <div :style="'border-top: ' + (200 - index * 6) + 'px solid ' + item.color + ';'">
                <span>第{{item.value}}个梯形</span>
              </div>
            </div>
            <div class="p2"></div>
          </div>
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
      isChange: false,
      color: [
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
        { value: 20, color: "#634AFC" }
      ]
    };
  },
  watch: {},
  mounted() {
    this.height = this.$store.state.HEIGHT;
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
    //使用制定的配置项和数据显示图表
    myChart.setOption(this.option);
    this.isChange = true;
  },
  destroyed() {},
  methods: {

    carouselChange(i) {
      console.log(i)
      if (i == 1) {
        this.isChange = false;
      } else {
        this.isChange = false;
      }
    }
  }
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
    width: 100%;
    height: 100%;
    background: #10145E;
    .p1 {
      width: 48px;
      height: 248px;
      position: absolute;
      z-index: 100;
      top: 40px;
      left: 50%;
      margin-left: -24px;
      transform-origin: bottom center;
      div {
        position: absolute;
        bottom: 100px;
        left: 0;
        width: 20px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        background: linear-gradient(#e66465, #9198e5);
        span {
          position: absolute;
          left: 0;
          bottom: 20px;
          text-align: center;
          color: #fff;
          font-size: 12px;
        }
      }
    }
    .p2 {
      width: 494px;
      height: 494px;
      position: absolute;
      top: 40px;
      left: 50%;
      margin-left: -257px;
      border: 1px solid #2B12C3;
      border-radius: 50%;
      background-blend-mode: screen, multiply;
    }
  }
}
</style>