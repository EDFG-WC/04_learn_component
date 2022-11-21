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
      </div>
    );
  }

  changeTxt() {
    //setState是异步更新
    // this.setState({
    //   txt: '你好哇, 李银河',
    // });
    // console.log(this.state.txt);
    // 为什么搞成异步的?
    // 1.这样可以提高性能. 否则每次改变state都要调用一次render函数; 获取到多个变化的参数同时更新明显更有效率
    // 2.如果同步更新了state, 但是render函数还没有执行完. 这个时候state和props里的数据就不同步. 这将是一个非常麻烦的问题.
    // 现在我偏要拿到这个更新后的数据, 有什么办法?
    // 方法1: 给setState传第二个参数: 回调函数
    this.setState(
      {
        txt: '你好啊, 路飞',
      },
      () => {
        console.log(this.state.txt);
      },
    );
  }

  // 方法2: state成功更新之后, 一定会执行这个生命周期方法. 在这里也可以获得的最新的state里的状态.
  // 注意: 如果我们2个地方都使用这个打印, 你就会看出来区别: 先执行生命周期函数, 后执行回调函数. 这个是源代码的逻辑.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.txt);
  }
}
