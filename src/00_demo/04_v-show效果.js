import React, { Component } from "react";

export default class App extends Component {
  render() {
    const { isLogin } = this.state;

    return (
      <div>
        <button onClick={(e) => this.loginClick()}>
          {isLogin ? "退出" : "登陆"}
        </button>
        <h2 style={{ display: isLogin ? "block" : "none" }}>你好啊,老王</h2>
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
