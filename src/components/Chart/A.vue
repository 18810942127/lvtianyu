<template>
  <div :style="'width:' + width2 + 'px;height:' + height + 'px;margin: 0 auto;'" ref="chart"></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("@/assets/js/china.js");
import { List } from "@/services/report.js";
export default {
  props: {},
  data() {
    return {
      height: 0,
      width2: 0,
      option: {},
      list: [],
      page: 1,
      size: 0,
      total: 1
    };
  },
  mounted() {
    let size = 30;
    let lh = 40;
    this.height = window.innerHeight;
    this.width2 = parseInt(window.innerWidth / 2);
    if (this.height < 500) {
      this.height = 500;
      size = 16;
      lh = 26;
    } else {
      size = 16 + Math.floor(this.height / 50);
      lh = 26 + Math.floor(this.height / 50);
    }
    let dataList = localStorage.getItem("DATALIST");
    let list = [];
    if (dataList) {
      list = JSON.parse(dataList);
    }

    this.option = {
      title: {
        show: true,
        text: "总用户数9999\n当前在线人数：" + this.total,
        textStyle: {
          color: "#fff",
          fontWeight: "bolder",
          fontSize: size,
          lineHeight: lh
        },
        left: "center",
        top: lh + "px"
      },
      visualMap: {
        min: 1,
        max: 30,
        left: "left",
        top: "bottom",
        inRange: {
          color: ["rgba(100,149,237,.1)", "rgba(100,149,237,1)"]
        },
        show: false
      },
      geo: {
        map: "china",
        itemStyle: {
          normal: {
            areaColor: "#1c1c1c",
            borderColor: "rgba(100,149,237,.2)",
            borderWidth: 1.5
          },
          emphasis: {
            areaColor: "#2a333d"
          }
        },
        silent: true
      },
      backgroundColor: "#000",
      series: [
        {
          name: "信息量",
          type: "scatter",
          coordinateSystem: "geo",
          data: list,
          symbolSize: 4,
          itemStyle: {
            color: "#fff"
          }
        }
      ]
    };

    if (dataList) {
      let that = this;
      let timer = setTimeout(() => {
        clearTimeout(timer);
        this.option.title.text = "总用户数9999\n当前在线人数：" + list.length;
        var myChart = echarts.init(this.$refs.chart);
        myChart.setOption(this.option);

        myChart.on("finished", function() {
          that.loading = false;
        });
      }, 500);
      this.getList();
    } else {
      this.getList2();
    }
  },
  computed: {},
  methods: {
    getList() {
      List({
        pagenum: this.page,
        pagesize: 0
      }).then(
        res => {
          let list = this.list;
          if (res.code == 0) {
            if (res.data.list) {
              res.data.list.forEach(item => {
                list.push([item.longitude, item.latitude, item.studyDuration]);
              });
            }
          } else {
            this.$message.error(res.message);
          }
          localStorage.setItem("DATALIST", JSON.stringify(list));
        },
        err => {
          this.$message.error("网络错误");
        }
      );
    },
    getList2() {
      List({
        pagenum: this.page,
        pagesize: 0
      }).then(
        res => {
          let that = this;
          let list = this.list;
          if (res.code == 0) {
            if (res.data.list) {
              res.data.list.forEach(item => {
                list.push([item.longitude, item.latitude, item.studyDuration]);
              });
            }
            this.total = res.data.total == 0 ? 1 : res.data.total;
          } else {
            this.$message.error(res.message);
          }
          this.option.series[0].data = list;
          this.option.title.text = "总用户数9999\n当前在线人数：" + this.total;
          var myChart = echarts.init(this.$refs.chart);
          myChart.setOption(this.option);

          myChart.on("finished", function() {
            that.loading = false;
          });
          localStorage.setItem("DATALIST", JSON.stringify(list));
        },
        err => {
          this.$message.error("网络错误");
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
