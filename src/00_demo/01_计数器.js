import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        {/*注意在jsx里怎么注释代码?*/}
        {/*大家来想想, 方法怎么绑定在按钮上?*/}
        <button onClick={this.increase.bind(this)}>+1</button>
        <button
          onClick={() => {
            this.decrease();
          }}
        >
          -1
        </button>
        <button onClick={this.btnClick}>button 1</button>
        <button onClick={this.btnClick2}>button 2</button>
        <button onClick={this.btnClick3}>button 3</button>
      </div>
    );
  }
  constructor() {
    // 这里创建的属性叫做class fields, 和state里的属性不同, 每次创建App类都会创建一次.
    super();
    this.state = {
      counter: 0,
      message1: "Hello World",
      message2: "Hello Manulife",
      message3: "Hello React",
    };
    this.btnClick = this.btnClick.bind(this);
  }
  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrease() {
    this.setState({ counter: this.state.counter - 1 });
  }
  btnClick() {
    alert(this.state.message1);
  }
  btnClick2() {
    alert(this.state.message2);
  }
  btnClick3 = () => {
    alert(this.state.message3);
  };
}
