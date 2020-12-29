<template>
  <div class="DayOrderManagement">
    <book-sales-item :isShow="false" class="DayOrderManagement" height="130px">
      <p slot="title"><span></span>选择查询日期</p>
      <ul slot="content" class="dayUl">
        <li
          v-for="(item, index) of selectDate()"
          :key="index"
          :class="{ today: index === toDay }"
        >
          {{ item }}
        </li>
      </ul>
    </book-sales-item>
    <book :isDiscolor="true">
      <tr slot="head">
        <td v-for="(item, index) of queryHead" :key="index">{{ item }}</td>
      </tr>
      <tr slot="content" v-for="(item, index) of queryContent" :key="index">
        <td v-for="(td, current) of item" :key="current">{{ td }}</td>
      </tr>
    </book>
    <div class="conclusion">
      <div>
        <p>{{ allOrder }}</p>
        <span>{{ this.toMonth + 1 }}月{{ this.toDay - 2 }}日总订单量</span>
      </div>
      <div>
        <p>{{ allBorrow }}</p>
        <span>{{ this.toMonth + 1 }}月{{ this.toDay - 2 }}日总借阅量</span>
      </div>
      <div>
        <p>￥{{ totalAmount }}</p>
        <span>{{ this.toMonth + 1 }}月{{ this.toDay - 2 }}日总成交金额</span>
      </div>
    </div>
  </div>
</template> 
<script>
import BookSalesItem from "common/BookSalesItem";
import Book from "common/book/Book";
export default {
  components: { BookSalesItem, Book },
  name: "DayOrderManagement",
  methods: {
    // 设置当前日期
    selectDate() {
      let dat = new Date();
      this.toMonth = dat.getMonth();
      let year = dat.getFullYear();
      this.toDay = dat.getDate() + 2;
      let day = new Date(year, this.toMonth + 1, 0).getDate();
      let replace_month = [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ];

      let date = ["<", replace_month[this.toMonth], ">"];
      for (let i = 1; i <= day; i++) {
        date.push(i);
      }
      return date;
    },
  },
  data() {
    return {
      toDay: 3,
      toMonth: 1,
      allOrder: 288,
      allBorrow: 416,
      totalAmount: 23011.2,
      queryHead: [
        "排序",
        "书籍编号",
        "书籍名称",
        "单价",
        "售出数量",
        "借阅数量",
        "成交金额",
      ],
      queryContent: [
        ["1", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
        ["2", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
        ["3", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
        ["4", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
        ["5", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
        ["6", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
        ["7", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
        ["8", "A-1-1-101", "《追风筝的人》", "79.9", "36", "52", "￥2876.4"],
      ],
    };
  },
};
</script>
<style scoped lang="less">
.DayOrderManagement {
  background-color: #eee;
  .dayUl {
    display: flex;
    padding-left: 10px;
    padding-right: 15px;
    line-height: 35px;
    margin-top: 27px;
    .today {
      background-color: #00a482;
      color: #fff;
    }
    li {
      flex: 1;
      text-align: center;
      background-color: #fff;
      color: #000;
      margin: 0 3px;
      font-size: 20px;
    }
    li:nth-child(1),
    li:nth-child(3) {
      background-color: #1b1b1b;
      color: #00a482;
      cursor: pointer;
    }
    li:nth-child(2) {
      background-color: transparent;
      font-size: 13px;
      margin: 0;
    }
    li:nth-child(n + 4):not(.today):hover {
      background-color: rgba(0, 164, 130, 0.6);
    }
  }
  .conclusion {
    height: 199px;
    display: flex;
    padding: 0 279px;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 25px;
        color: tomato;
        margin-bottom: 10px;
      }
      span {
        font-size: 18px;
        color: #666;
      }
    }
  }
}
</style>