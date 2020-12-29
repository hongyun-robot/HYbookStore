<template>
  <div class="MonthOrderManagement">
    <book-sales-item width="48%" height="420px" :options="monthOrderTendency">
      <p slot="title"><span></span>月订单量趋势图</p>
    </book-sales-item>
    <book-sales-item width="48%" height="420px" :options="monthOrderStatement">
      <p slot="title"><span></span>月销售任务完成报表</p>
    </book-sales-item>
    <book-sales-item width="48%" height="420px" :options="bookCategory">
      <p slot="title"><span></span>畅销书籍分类百分比</p>
    </book-sales-item>
    <book-sales-item width="48%" height="420px" :isShow="false">
      <p slot="title"><span></span>月总结</p>
      <ul slot="content" class="monthOrder">
        <li v-for="(item, index) of month" :key="index">
          {{
            item
          }}：本月各类书籍（包含杂志）的售出，借阅量的成交价金额已经达到阶...
        </li>
      </ul>
    </book-sales-item>
  </div>
</template>
<script>
import BookSalesItem from "common/BookSalesItem";
import {
  monthOrderTendency,
  monthOrderStatement,
  bookCategory,
} from "assets/data/options";
export default {
  components: { BookSalesItem },
  name: "MonthOrderManagement",
  data() {
    return {
      monthOrderTendency: monthOrderTendency(),
      monthOrderStatement: monthOrderStatement(),
      bookCategory: bookCategory(),
      month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月"],
    };
  },
};
</script>
<style scoped lang="less">
.MonthOrderManagement {
  display: flex;
  flex-wrap: wrap;
  background-color: #eee;
  & > div:nth-child(2n) {
    margin-left: 4%;
  }
  .monthOrder {
    padding: 20px;
    li {
      background-color: #fff;
      margin-top: 10px;
      line-height: 30px;
      padding: 0 20px;
      letter-spacing: 1px;
      width: 685px;
      font-size: 18px;
    }
  }
}
</style>