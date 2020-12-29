<template>
  <div class="body">
    <ul
      class="layui-nav layui-nav-tree layui-nav-side"
      lay-filter="test"
      :style="{ top: top }"
    >
      <tab-bar-item
        v-for="(item, key, index) of options"
        :key="index"
        :class="{ 'layui-nav-itemed': item[1] }"
      >
        <a href="javascript:;" slot="a">
          <i :class="'layui-icon ' + item[0]" style="font-size: 21px"></i>
          {{ key }}
        </a>
        <dl class="layui-nav-child" slot="dl" v-if="item[1]">
          <dd v-for="(option, keys, current) of item[1]" :key="current">
            <router-link :to="{ name: option }" tag="a" href="javascript:;">{{
              keys
            }}</router-link>
          </dd>
        </dl>
      </tab-bar-item>
    </ul>
  </div>
</template> 
<script>
import TabBarItem from "./TabBarItem";
export default {
  components: { TabBarItem },
  props: {
    top: {
      type: String,
      default: "80px",
    },
  },
  name: "TabBar",
  data() {
    return {
      options: {
        用户资料: [
          "layui-icon-user",
          { 用户资料: "UserInformation", 选项: "UserOptions" },
        ],
        图书管理: [
          "layui-icon-list",
          {
            销售数据: "BookSales",
            书籍查询: "BooksQuery",
            书籍管理: "BookManagement",
          },
        ],
        订单管理: [
          "layui-icon-form",
          {
            日订单管理: "DayOrderManagement",
            月订单管理: "MonthOrderManagement",
          },
        ],
        营销中心: [
          "layui-icon-app",
          { 活动中心: "ActivityCenter", 渠道中心: "ChannelCenter" },
        ],
        会员中心: ["layui-icon-diamond", false],
        消息公告: ["layui-icon-speaker", false],
      },
      icon: [
        "layui-icon-user",
        "layui-icon-list",
        "layui-icon-form",
        "layui-icon-app",
        "layui-icon-diamond",
        "layui-icon-speaker",
      ],
    };
  },
  mounted() {
    layui.use("element", function () {
      let element = layui.element;
      element.on("nav(test)", function (data) {});
    });
  },
};
</script>
<style scoped>
.layui-icon {
  margin-right: 10px;
}
.body {
  width: 100%;
  height: 100%;
}
</style>