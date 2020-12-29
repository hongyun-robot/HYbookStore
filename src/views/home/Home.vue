<template>
  <div id="home">
    <h1>图书管理系统</h1>
    <div class="mask">
      <h2>登录</h2>
      <div class="user_name">
        <input class="user" required type="text" />
        <span>请输入用户名</span>
      </div>
      <div class="user_pwd">
        <input
          class="pwd"
          required
          type="password"
          ref="pwd"
          @focus="focus"
          @blur="blur"
        />
        <span>请输入密码</span>
        <img :src="image" ref="iconEye" @click="display" v-show="flag" />
      </div>
      <div class="remember">
        <input type="checkbox" />
        <span>记住我</span>
      </div>
      <router-link to="/homePage" tag="button">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      image: require("../../assets/image/隐藏.png"),
      flag: false,
    };
  },
  methods: {
    focus() {
      this.flag = true;
    },
    blur() {
      this.flag = false;
    },
    display() {
      if (!this.flag) {
        this.image = require("../../assets/image/眼睛.png");
        this.$refs.pwd.setAttribute("type", "text");
        this.flag = true;
      } else {
        this.image = require("../../assets/image/隐藏.png");
        this.$refs.pwd.setAttribute("type", "password");
        this.flag = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  background: url("~assets/image/preview.jpg") no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100vw;
  position: relative;
  &::before {
    content: "";
    display: table;
  }

  h1 {
    margin: 5% 0;
    text-align: center;
    color: #fff;
    font-size: 3.5em;
    letter-spacing: 15px;
  }

  .mask {
    width: 95%;
    height: 70%;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid #ccc;
    box-shadow: 1px 0 10px 3px rgba(0, 0, 0, 0.6);
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;

    h2 {
      font-size: 2.5em;
      color: #fff;
      letter-spacing: 10px;
      margin-top: 70px;
      margin-left: 36%;
    }

    .user_name,
    .user_pwd {
      position: relative;
      input {
        display: block;
        margin-left: 36%;
        margin-top: 60px;
        border: none;
        background-color: transparent;
        width: 450px;
        height: 60px;
        font-size: 1.5em;
        padding: 10px;
        letter-spacing: 3px;
        outline: none;
        color: #fff;
        border-bottom: 1px solid #ccc;
        &:focus + span,
        &:valid + span {
          font-size: 1em;
          transform: translate(-10px, -30px);
        }
      }
      span {
        color: #fff;
        position: absolute;
        left: 37%;
        top: 14px;
        font-size: 1.5em;
        letter-spacing: 4px;
        transition: all 0.5s;
      }
    }
    .user_pwd {
      img {
        display: none;
        position: absolute;
        width: 25px;
        height: 25px;
        right: 40%;
        top: 24px;
      }
    }
    .remember {
      width: 450px;
      height: 100px;
      margin-left: 36%;
      margin-top: 30px;
      input {
        width: 25px;
        height: 25px;
        vertical-align: top;
        cursor: pointer;
      }
      span {
        color: #fff;
        font-size: 1.1em;
        margin-left: 10px;
        display: inline-block;
      }
      &::before {
        content: "";
        display: table;
      }
    }

    button {
      margin-left: 37%;
      width: 300px;
      height: 60px;
      font-size: 1.5em;
      letter-spacing: 10px;
      color: #fff;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.6);
      transition: all 0.1s;
      cursor: pointer;
      &:hover {
        background-color: #ccc;
        color: #000;
      }
    }
  }
}
</style>
