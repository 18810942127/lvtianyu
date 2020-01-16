<template>
  <div class="goodsReport -flex -flex-jc-between -flex-wrap -layout -box-sizing">
    <div class="box-card-100 -box-sizing -card -white -layout">
      <div class="title">商品销售统计</div>
      <div class="count-box -flex -flex-jc-around">
        <div class="count -flex -flex-item-center -flex-direction" v-for="(item, index) in percentage" :key="index">
          <div class="box" :style="'color:' + item.c + ';'">
            <Countup :start="item.n" :end="item.n" :style="'color:' + item.c + ';'"></Countup>%
          </div>
          <el-progress type="dashboard" :percentage="item.n" :color="item.c" :show-text="false"></el-progress>
          <span :style="'color:' + item.c + ';'">{{item.name}}</span>
          <i>
            <Countup :start="item.t" :end="item.t" :style="'color:' + item.c + ';'"></Countup>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Countup from "@/components/Countup";
export default {
  components: {
    Countup
  },
  data() {
    return {
      percentage: [
        {
          name: "商品A",
          n: 0,
          c: "#D264F8",
          t: 250
        },
        {
          name: "商品B",
          n: 0,
          c: "#7ED5F9",
          t: 450
        },
        {
          name: "商品C",
          n: 0,
          c: "#FF993C",
          t: 300
        }
      ]

    }
  },
  watch: {},
  mounted() {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      this.percentage = [
        {
          name: "商品A",
          n: 25,
          c: "red",
          t: 250
        },
        {
          name: "商品B",
          n: 45,
          c: "#7ED5F9",
          t: 450
        },
        {
          name: "商品C",
          n: 30,
          c: "#FF993C",
          t: 300
        }
      ];
    }, 300);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.goodsReport {
  padding: 20px;
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 80px;
    margin-left: 10px;
  }
  .count-box {
    .count {
      position: relative;
      .box {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 45px;
        left: 0;
        font-size: 20px;
      }
    }
    i {
      margin-top: 20px;
      font-size: 40px;
    }
  }
  .box-card-100 {
    width: 100%;
    height: 100%;
    padding-top: 100px;
  }
}
</style>