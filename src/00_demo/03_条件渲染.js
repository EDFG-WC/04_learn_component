import React, { Component } from "react";

export default class App extends Component {
  render() {
    // 这一整块是render函数里, return之外的一些东西.
    const { isLogin } = this.state;
    let welcome = null;
    let btnText = null;
    // 通过if判断在逻辑代码很多的时候比较好用
    if (isLogin) {
      welcome = <h2>欢迎回来</h2>;
      btnText = "退出";
    } else {
      welcome = <h2>请先登陆</h2>;
      btnText = "登陆";
    }
    return (
      <div>
        {welcome}
        <button onClick={(e) => this.loginClick()}>{btnText}</button>
        <hr />
        <h2>{isLogin ? "你好啊,老王" : null}</h2>
        <h2>{isLogin && "你好啊,老王2"}</h2>
      </div>
    );
  }

  constructor() {
    super();

    this.state = {
      message: "Hello World",
      movies: ["大话西游", "盗梦空间", "星际穿越", "流浪地球"],
      isLogin: true,
    };
  }

  loginClick() {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }
}
