<template>
  <div
    :style="'width:' + (width3 - 40) + 'px;height:' + height3 + 'px;margin: 100px 0;'"
    ref="chart2"
  ></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
import { Order } from "@/services/report.js";
export default {
  props: {},
  data() {
    return {
      height3: 0,
      width3: 0,
      option2: {},
      orderKey: "",
      orderValue: ""
    };
  },
  mounted() {
    this.height3 = parseInt(window.innerHeight / 4);
    this.width3 = parseInt(window.innerWidth / 4);
    this.option2 = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        show: false
      },
      yAxis: {
        type: "category",
        data: [],
        axisLabel: {
          color: "#fff"
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      series: [
        {
          name: "课程产品销量",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "insideRight"
          },
          itemStyle: {
            normal: {
              color: "rgba(100,149,237,1)"
            }
          },
          barMinHeight: 30,
          barCategoryGap: "30%",
          data: []
        }
      ]
    };
    Order({
      pagenum: this.page,
      pagesize: 0
    }).then(
      res => {
        if (res.code == 0) {
          if (res.data) {
            let key = [];
            let value = [];
            let list = [];
            res.data.forEach(item => {
              key.push(item.key);
              value.push(item.value);
              list.push({
                name: item.key,
                value: item.value
              });
            });
            this.orderKey = key;
            this.orderValue = value;
            this.option2.yAxis.data = key;
            this.option2.series[0].data = value;
            var myChart2 = echarts.init(this.$refs.chart2);
            myChart2.setOption(this.option2);
            myChart2.on("finished", function() {});
          }
        } else {
          this.$message.error(res.message);
        }
      },
      err => {
        this.$message.error("网络错误");
      }
    );
  },
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
