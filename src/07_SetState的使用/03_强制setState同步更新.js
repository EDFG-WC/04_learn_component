import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      txt: 'Hello World',
    };
  }

  render() {
    return (
      <div>
        <h2>当前内容: {this.state.txt}</h2>
        <button onClick={(event) => this.changeTxt()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  changeTxt() {
    // 1. 将setState放进定时器
    setTimeout(() => {
      this.setState({
        txt: '你好啊, 路飞',
      });
      console.log(this.state.txt);
    }, 0);
  }

  componentDidMount() {
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        txt: '你好啊, 路飞',
      });
      console.log(this.state.txt);
    });
  }
}
