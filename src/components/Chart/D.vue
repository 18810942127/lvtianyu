<template>
  <div
    :style="'width:' + (width3 - 40) + 'px;height:' + height3 + 'px;margin: 0 auto;'"
    class="dbox"
  >
    <div v-for="(item, index) in list" :key="index" style="margin-bottom: 4px;">
      <h3
        class="medium -transition"
        :class="item.isShow ? 'opacity-1' : 'opacity-0'"
      >{{ item.text }}</h3>
    </div>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  props: {},
  data() {
    return {
      height3: 0,
      width3: 0,
      height: 60,
      list: [
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        },
        {
          text: "",
          isShow: false
        }
      ],
      index: 0,
      isNone: true,
      isAgain: false
    };
  },
  mounted() {
    this.height = window.innerHeight;
    this.height3 = parseInt(window.innerHeight / 4);
    this.width3 = parseInt(window.innerWidth / 4);
    this.list = [
      {
        text: "司马先生（158****6100）在2020年11月29日获得了12000元的现金返利",
        isShow: false
      },
      {
        text: "郭先生（133****1427）在2020年8月12日获得了9000元的现金返利",
        isShow: false
      },
      {
        text: "王女士（138****3230）在2020年7月13日获得了5000元的现金返利",
        isShow: false
      },
      {
        text: "周先生（135****9090）在2020年6月15日获得了3000元的现金返利",
        isShow: false
      },
      {
        text: "吕先生（188****2127）在2020年5月15日获得了3000元的现金返利",
        isShow: false
      },
      {
        text: "李先生（155****3277）在2020年5月15日获得了10000元的现金返利",
        isShow: false
      },
      {
        text: "吴先生（187****5250）在2020年5月12日获得了2000元的现金返利",
        isShow: false
      },
      {
        text: "郝先生（132****4564）在2020年5月9日获得了4000元的现金返利",
        isShow: false
      },
      {
        text: "朱女士（199****0102）在2020年5月4日获得了3000元的现金返利",
        isShow: false
      },
      {
        text: "郑先生（189****1213）在2020年4月18日获得了4000元的现金返利",
        isShow: false
      }
    ];
    this.interval();
  },
  computed: {},
  methods: {
    interval() {
      let timerX = setInterval(() => {
        this.list[this.index].isShow = this.isNone;
        this.index += 1;
        if (this.index >= 10) {
          this.index = 0;
          this.isNone = !this.isNone;
          window.clearInterval(timerX);
          if (this.isNone) {
            timerX = setTimeout(() => {
              window.clearTimeout(timerX);
              this.interval();
            }, 300);
          } else {
            timerX = setTimeout(() => {
              window.clearTimeout(timerX);
              this.interval();
            }, 5000);
          }
        }
      }, 300);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dbox {
  .medium {
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
  .-transition {
    transition: all 2s ease;
    -moz-transition: all 2s ease; /* Firefox 4 */
    -webkit-transition: all 2s ease; /* Safari 和 Chrome */
    -o-transition: all 2s ease;
  }
  .opacity-0 {
    opacity: 0;
  }
  .opacity-1 {
    opacity: 1;
  }
}
</style>
