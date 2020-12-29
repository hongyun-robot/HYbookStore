<template>
  <div class="top" :style="{ background: color, height: height }">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template> 
<script>
export default {
  name: "Top",
  props: {
    color: {
      type: String,
      default: "blue",
    },
    height: {
      type: String,
      default: "80px",
    },
  },
};
</script>
<style scoped lang='less'>
.top {
  display: flex;
  width: 100%;
  .left,
  .right {
    width: 300px;
    display: flex;
    align-items: center;
  }
  .right {
    justify-content: flex-end;
  }
  .center {
    flex: 1;
    display: flex;
    align-items: center;
  }
}
</style>