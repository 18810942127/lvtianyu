<template>
  <div class="report -box-sizing -layout">
    <div class="reportbox -black -card -layout" :class="isScreen ? 'reportfixed -border-none' : ''">
      <i class="screen el-icon-full-screen" @click="toScreen" v-if="!isScreen"></i>

      <div class="-flex">
        <div class="left">
          <img
            src="https://public-file-yunshan.oss-cn-beijing.aliyuncs.com/687be056dd8185b638b216f397c9ed56.png"
            alt
          />
          <i
            class="el-icon-location icon"
            :class="item.id == cidx ? 'active animation' : ''"
            v-for="(item, index) in list"
            :key="index"
            :style="item.l"
          ></i>
        </div>

        <div class="right -flex -flex-jc-end">
          <div class="plate">
            <h1 class="relative" :class="isShow ? 'animation' : 'opacity-1'">{{list[cidx - 1].name}}</h1>
            <h2 class="relative delay1" :class="isShow ? 'animation' : 'opacity-1'">用户量:</h2>
            <p class="relative delay2" :class="isShow ? 'animation' : 'opacity-1'">
              {{list[cidx - 1].n}}
              <span>人</span>
            </p>

            <h2 class="relative delay3" :class="isShow ? 'animation' : 'opacity-1'">有效学习时长:</h2>
            <p class="relative delay4" :class="isShow ? 'animation' : 'opacity-1'">
              {{list[cidx - 1].h}}
              <span>小时</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Countup from "@/components/Countup";
let timer = null;
export default {
  components: {
    Countup
  },
  data() {
    return {
      cidx: 1,
      isShow: true,
      isScreen: false,
      list: [
        {
          id: 1,
          name: "北京",
          n: "3231",
          h: "34152",
          l: "left: 73.8%;top: 38%;"
        },
        {
          id: 2,
          name: "洛阳",
          n: "2452",
          h: "14593",
          l: "left: 67.3%;top: 51.4%;"
        },
        {
          id: 3,
          name: "长春",
          n: "2330",
          h: "15020",
          l: "left: 87%;top: 27.2%;"
        },
        {
          id: 4,
          name: "呼和浩特",
          n: "2884",
          h: "15444",
          l: "left: 66.5%;top: 35.5%;"
        },
        {
          id: 5,
          name: "南京",
          n: "643",
          h: "8593",
          l: "left: 80.5%;top: 55.5%;"
        },
        {
          id: 6,
          name: "济南",
          n: "1403",
          h: "10204",
          l: "left: 75.5%;top: 46.5%;"
        }
      ]
    };
  },
  watch: {},
  mounted() {
    let len = this.list.length;
    clearInterval(timer);
    clearTimeout(ctimer);
    let ctimer = setTimeout(() => {
      this.isShow = false;
      clearTimeout(ctimer);
    }, 3000);
    timer = setInterval(() => {
      this.isShow = true;
      clearTimeout(ctimer);
      let ctimer = setTimeout(() => {
        this.isShow = false;
        clearTimeout(ctimer);
      }, 3000);
      let cidx = this.cidx;
      cidx++;
      if (cidx > len) {
        cidx = 1;
      }
      this.cidx = cidx;
    }, 5000);
    let that = this;
    document.addEventListener("fullscreenchange", function() {
      that.isScreen = !that.isScreen;
    });
    document.addEventListener("mozfullscreenchange", function() {
      that.isScreen = !that.isScreen;
    });
    document.addEventListener("MSFullscreenChange", function() {
      that.isScreen = !that.isScreen;
    });
    document.addEventListener("webkitfullscreenchange", function() {
      that.isScreen = !that.isScreen;
    });
  },
  destroyed() {
    clearInterval(timer);
  },
  methods: {
    toScreen() {
      function lanchFullscreen(element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullScreen();
        }
      }
      lanchFullscreen(document.documentElement);
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes reportFadeInUp {
  from {
    top: 40px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@keyframes reportTop {
  from {
    margin-top: -15px;
  }
  to {
    margin-top: 0;
  }
}
.report {
  width: 100%;
  height: 100%;
  padding: 20px;
  .reportbox {
    width: 100%;
    height: 100%;
    position: relative;

    .screen {
      position: absolute;
      right: 14px;
      top: 14px;
      color: #6dbef7;
      font-size: 26px;
      cursor: pointer;
    }

    .left {
      width: 60%;
      position: relative;
      .icon {
        font-size: 30px;
        color: #6dbef7;
        position: absolute;
        &.active {
          color: #ff926a;
        }
        &.animation {
          animation: reportTop 0.8s infinite;
          animation-fill-mode: both;
        }
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      width: 40%;
      padding-top: 50px;
      padding-right: 50px;
      .animation {
        animation: reportFadeInUp 1.5s;
        animation-fill-mode: both;
      }
      .delay1 {
        animation-delay: 300ms;
      }
      .delay2 {
        animation-delay: 600ms;
      }
      .delay3 {
        animation-delay: 900ms;
      }
      .delay4 {
        animation-delay: 1200ms;
      }
      .relative {
        position: relative;
      }
      .plate {
        width: 70%;
        height: 400px;
        background: #2e3342;
        border: 1px solid #454545;
        border-radius: 8px;
        color: #6dbef7;
        .opacity-1 {
          opacity: 1;
        }
        h1 {
          text-align: center;
          padding: 32px;
          opacity: 0;
        }
        h2 {
          padding-left: 32px;
          opacity: 0;
        }
        p {
          text-align: center;
          font-size: 50px;
          color: #ff926a;
          margin: 16px;
          opacity: 0;
          span {
            font-size: 16px;
            margin-left: 10px;
            color: #6dbef7;
          }
        }
      }
    }
  }

  .reportfixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    border-radius: 0;
  }
}
</style>