<template>
  <div class="BookSalesItem" :style="BookSalesStyle">
    <slot name="title"><span></span></slot>
    <div ref="echarts" class="echarts" v-if="isShow"></div>
    <slot name="content" v-else></slot>
  </div>
</template>
<script>
export default {
  name: "BookSalesItem",
  data() {
    return {
      BookSalesStyle: {
        width: this.width,
        height: this.height,
      },
    };
  },
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "500px",
    },
    options: {
      type: Object,
      default: () => {},
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (this.isShow) {
      let myChart = this.$echarts.init(this.$refs.echarts);
      myChart.setOption(this.options);
    }
  },
};
</script>
<style scoped lang="less">
.BookSalesItem {
  & > p:first-child {
    width: 100%;
    padding-left: 50px;
    line-height: 40px;
    color: #02a091;
    font-size: 18px;
    background-color: #1b1b1b;
    position: relative;
    span {
      width: 12px;
      height: 12px;
      background-color: #02a091;
      border-radius: 50%;
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-6px);
    }
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
  .contents {
    height: 100%;
  }
}
</style>