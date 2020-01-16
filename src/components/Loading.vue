<template>
  <div class="loading">
    <div class="box">
      <div class="-blue"></div>
      <div class="-blue"></div>
      <div class="-blue"></div>
      <div class="-blue"></div>
      <div class="-blue"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4001;
  background-color: hsla(0, 0%, 100%, 0.9);
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
  .-blue {
    background-color: #5d78ff;
  }
  .box {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
  }
  .box div {
    width: 5px;
    height: 20px;
    margin: 3px;
    border-radius: 6px;
    box-shadow: 0 0 40px 0 #5d78ff;
  }

  .box div:nth-child(1) {
    animation: loading 0.5s ease 0s infinite alternate;
  }
  .box div:nth-child(2) {
    animation: loading 0.5s ease 0.1s infinite alternate;
  }
  .box div:nth-child(3) {
    animation: loading 0.5s ease 0.2s infinite alternate;
  }
  .box div:nth-child(4) {
    animation: loading 0.5s ease 0.3s infinite alternate;
  }
  .box div:nth-child(5) {
    animation: loading 0.5s ease 0.4s infinite alternate;
  }

  @keyframes loading {
    from {
      /*缩放y轴*/
      transform: scaleY(1);
    }

    to {
      transform: scaleY(0.5);
    }
  }
}
</style>
