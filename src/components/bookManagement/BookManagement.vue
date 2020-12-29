<template>
  <div class="bookManagement">
    <book>
      <tr slot="head">
        <td v-for="(item, index) of queryHead" :key="index">{{ item }}</td>
      </tr>
      <tr
        ref="tr"
        slot="content"
        v-for="(item, index) of queryContent"
        :key="index"
        class="tr"
      >
        <td v-for="(td, current) of item" :key="current">
          {{ td }}
        </td>
      </tr>
    </book>
    <book-sales-item :isShow="false" height="209px">
      <p slot="title"><span></span>书籍信息录入</p>
      <div slot="content" class="managementQuery">
        <div><span>书籍名称：</span><input type="text" /></div>
        <div><span>书籍编号：</span><input type="text" /></div>
        <div><button>查询</button></div>
      </div>
    </book-sales-item>
  </div>
</template>
<script>
import Book from "common/book/Book";
import BookSalesItem from "common/BookSalesItem";
export default {
  name: "BookManagement",
  components: { Book, BookSalesItem },
  data() {
    return {
      queryHead: [
        "书籍编号",
        "书籍名称",
        "书籍简介",
        "书籍分类",
        "书籍数量",
        "书籍单价",
        "操作",
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
  mounted() {
    this.$refs.tr.forEach((element) => {
      let td = document.createElement("td");
      td.setAttribute("class", "lastTd");
      td.innerHTML = "<button>编辑</button><button>下架</button>";
      element.appendChild(td);
    });
  },
};
</script>
<style lang="less">
.bookManagement {
  background-color: #eee;
  .lastTd {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    button {
      width: 70px;
      font-size: 18px;
      cursor: pointer;
      &:first-child {
        background-color: #00a482;
        color: #fff;
        &:hover {
          background-color: rgba(0, 164, 130, 0.7);
        }
      }
      &:last-child {
        color: #00a482;
        background-color: #1b1b1b;
        &:hover {
          background-color: rgba(27, 27, 27, 0.7);
        }
      }
    }
  }
  .managementQuery {
    display: flex;
    height: 100%;
    align-items: center;
    div {
      flex: 1;
      padding-left: 20px;
      button {
        background-color: #00a482;
        color: #fff;
        letter-spacing: 15px;
        padding-left: 15px;
        width: 160px;
        height: 30px;
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 164, 130, 0.7);
        }
      }
      input {
        width: 80%;
        border: 2px solid #333;
        padding-left: 10px;
        height: 30px;
      }
    }
  }
}
</style>