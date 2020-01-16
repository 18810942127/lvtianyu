<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  watch: {
    $route() {
      document.title = this.$route.meta.title;
    }
  },
  mounted() {
    console.log("版本号：v1.0.2");
  }
};
</script>

<style>
</style>
