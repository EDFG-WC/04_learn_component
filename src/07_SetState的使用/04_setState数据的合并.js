import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'alex',
      txt: 'Hello World',
    };
  }

  render() {
    return (
      <div>
        <h2>当前内容: {this.state.txt}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={(event) => this.changeTxt()}>改变文本</button>
      </div>
    );
  }

  changeTxt() {
    this.setState({
      txt: '你好哇, 王小波',
    });
    // 给txt赋值的时候, setState做了这样一件事: return Object.assign({}, this.state, {txt: '你好哇, 王小波'})
  }
}
