<template>
  <div class="report">
    <div class="box" :style="'width:' + width3 + 'px;height:' + height + 'px;'">
      <com-b></com-b>
      <com-c></com-c>
    </div>
    <div>
      <com-a></com-a>
    </div>
    <div class="box" :style="'width:' + width3 + 'px;'">
      <com-d></com-d>
      <div :style="'width:' + width3 + 'px;height:' + height3 + 'px;'"></div>
    </div>
  </div>
</template>
<script>
import comA from "@/components/Chart/A";
import comB from "@/components/Chart/B";
import comC from "@/components/Chart/C";
import comD from "@/components/Chart/D";
export default {
  components: {
    comA,
    comB,
    comC,
    comD
  },
  data() {
    return {
      loading: false,
      width3: 0,
      height: 0,
      height3: 0
    };
  },
  watch: {},
  mounted() {
    this.loading = true;
    this.height = window.innerHeight;
    this.width3 = parseInt(window.innerWidth / 4);
    this.height3 = parseInt(window.innerHeight / 4);
  },
  destroyed() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.report {
  width: 100%;
  min-height: 100%;
  background: #000;
  display: flex;
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>