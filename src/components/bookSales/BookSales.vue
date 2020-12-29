<template>
  <div class="bookSales">
    <div class="bgc">
      <book-sales-item :options="report_option" height="300px" width="100%">
        <p slot="title"><span></span>近一周内书籍数据采样报告</p>
      </book-sales-item>
      <div class="saleBottom">
        <book-sales-item :options="salesData" width="33%" height="400px">
          <p slot="title"><span></span>近一周内销售数据占比明细</p>
        </book-sales-item>
        <book-sales-item
          :isShow="false"
          width="62%"
          height="410px"
          style="padding-bottom: 40px"
        >
          <p slot="title"><span></span>统计数据上报</p>
          <p
            class="salesP"
            slot="content"
            v-for="(item, index) of arrDate"
            :key="index"
          >
            <span>《第{{ item }}周销售数据报表》</span
            ><span>2020-11-{{ (arrDate.length - index) * 6 }}</span>
          </p>
        </book-sales-item>
      </div>
    </div>
  </div>
</template> 
<script>
import BookSalesItem from "common/BookSalesItem";
import { report_option, salesData } from "assets/data/options";

export default {
  name: "BookSales",
  data() {
    return {
      report_option: report_option(),
      salesData: salesData(),
      arrDate: ["五", "四", "三", "二", "一"],
    };
  },
  components: { BookSalesItem },
};
</script>
<style scoped lang="less">
.bookSales {
  .bgc {
    background-color: #eee;
    .saleBottom {
      width: 100%;
      display: flex;
      margin-top: 70px;
      & > div:first-child {
        margin-right: 5%;
      }
      .salesP {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        font-size: 18px;
        padding-right: 20px;
        span:first-child {
          font-weight: 700;
        }
        span:last-child {
          font-size: 15px;
          color: #666;
        }
      }
    }
    // .content {
    //   height: 100%;
    //   p {
    //     padding: 0 30px;
    //     height: 20%;
    //     font-size: 18px;
    //     position: relative;
    // span:first-child {
    //   font-weight: 700;
    // }
    // span:last-child {
    //   font-size: 15px;
    //   color: #666;
    // }
    //   }
    // }
  }
}
</style>