<template>
  <table class="book">
    <thead class="header">
      <slot name="head"></slot>
    </thead>
    <tbody class="content" :class="{ tbody: isDiscolor }">
      <slot name="content"></slot>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "Book",
  props: {
    isDiscolor: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="less">
table {
  width: 100%;
  tr {
    text-align: center;
  }
  thead {
    height: 40px;
    background-color: #1b1b1b;
    width: 100%;
    color: #02a091;
    font-size: 18px;
    tr {
      height: 40px;
    }
  }
  tbody {
    font-size: 16px;
    color: #333;
    tr {
      height: 60px;
    }
  }
  .tbody {
    tr:nth-child(2n) {
      background-color: #d2d2d2;
    }
  }
}
</style>