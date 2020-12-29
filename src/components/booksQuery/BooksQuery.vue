<template>
  <div class="bookQuery">
    <book>
      <tr slot="head">
        <td v-for="(item, index) of queryHead" :key="index">{{ item }}</td>
      </tr>
      <tr slot="content" v-for="(item, index) of queryContent" :key="index">
        <td v-for="(td, current) of item" :key="current">{{ td }}</td>
      </tr>
    </book>
    <book-sales-item :isShow="false" height="280px">
      <p slot="title"><span></span>书籍信息导入</p>
      <div slot="content" class="content">
        <div><span>书籍名称：</span><input type="text" /></div>
        <div><span>书籍类型：</span><input type="text" /></div>
        <div><span>书籍编号：</span><input type="text" /></div>
        <div><button>查询</button></div>
      </div>
    </book-sales-item>
  </div>
</template> 
<script>
import Book from "common/book/Book.vue";
import BookSalesItem from "common/BookSalesItem";
export default {
  components: { Book, BookSalesItem },
  name: "BooksQuery",
  data() {
    return {
      queryHead: [
        "书籍编号",
        "书籍名称",
        "书籍简介",
        "书籍分类",
        "书籍数量",
        "书籍单价",
      ],
      queryContent: [
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
        [
          "A100001",
          "《追风筝的人》",
          "美籍阿富汗商作家...",
          "励志、情感科普",
          "88",
          "39.9",
        ],
      ],
    };
  },
};
</script>
<style scoped lang="less">
.bookQuery {
  background: #eee;
  .content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;
    div {
      width: 35%;
      height: 100px;
      display: flex;
      align-items: center;
      margin-right: 8%;
      input,
      button {
        width: 85%;
        height: 30px;
      }
      input {
        border: 2px solid #000;
        padding-left: 10px;
        color: #fe0000;
        font-weight: 700;
        letter-spacing: 2px;
      }
      button {
        background-color: #00a482;
        color: #fff;
        letter-spacing: 15px;
        font-weight: 700;
        margin-left: 70px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 164, 130, 0.7);
        }
      }
    }
  }
}
</style>