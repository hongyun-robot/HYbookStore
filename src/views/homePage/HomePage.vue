<template>
  <div id="home_page" direction="horizontal ">
    <top :height="height" color="rgb(57, 61, 73)">
      <span slot="left" class="left">鸿运书店后台管理</span>
      <div slot="center" class="center">
        <p>{{ title() }}</p>
        <div class="search">
          <input type="text" placeholder="搜索" />
          <i class="layui-icon layui-icon-search"></i>
        </div>
      </div>
      <div slot="right" class="right">
        <ul class="layui-nav" lay-filter="demo">
          <li class="layui-nav-item">
            <a href="">个人中心<span class="layui-badge-dot"></span></a>
          </li>
          <li class="layui-nav-item">
            <a href=""><img src="//t.cn/RCzsdCq" class="layui-nav-img" />我</a>
            <dl class="layui-nav-child">
              <dd><a href="javascript:;">修改信息</a></dd>
              <dd><a href="javascript:;">安全管理</a></dd>
              <dd><a href="javascript:;">退了</a></dd>
            </dl>
          </li>
        </ul>
      </div>
    </top>
    <aside class="aside">
      <tab-bar :top="height"></tab-bar>
    </aside>
    <main class="main">
      <keep-alive>
        <router-view />
      </keep-alive>
    </main>
  </div>
</template>
<script>
import Top from "components/top/Top";
import TabBar from "components/tabBar/TabBar";

export default {
  components: { Top, TabBar },
  name: "HomePage",
  data() {
    return {
      height: "80px",
    };
  },
  mounted() {
    layui.use("element", function () {
      let element = layui.element;
      element.on("nav(demo)", function (data) {});
    });
  },
  methods: {
    title() {
      return document.title;
    },
  },
};
</script>
<style scoped lang="less">
.left {
  font-size: 1.5em;
  color: #fff;
  letter-spacing: 3px;
  margin-left: 18px;
}
.right {
  color: #fff;
  font-size: 1.1em;
  margin-right: 20px;
  a {
    color: #fff;
    font-size: 1em;
  }
}
.layui-nav-child {
  background-color: #393d49;
}

#home_page {
  display: flex;
  flex-wrap: wrap;
  .center {
    display: flex;
    p {
      color: #ffbd11;
      font-size: 30px;
    }
    .search {
      width: 600px;
      height: 63px;
      margin-left: 100px;
      position: relative;
      i {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2%;
        color: #fff;
        font-size: 20px;
      }
      input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: #fff;
        border: 2px solid #fff;
        padding: 0 20px;
        font-size: 18px;
        &::placeholder {
          color: #fff;
        }
      }
    }
  }
  .aside {
    height: 100px;
    width: 200px;
  }
  .main {
    flex: 1;
    padding: 40px;
  }
}
</style>