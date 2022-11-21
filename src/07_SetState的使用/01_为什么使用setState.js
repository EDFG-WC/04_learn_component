import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(event) => this.increase()}>+1</button>
      </div>
    );
  }

  increase() {
    //这种方式可以改变state里的属性, 但是react并不知道, 所以它并不会对应地去刷新数据.
    /*this.state.counter += 1;
                        console.log(this.state.counter);*/
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
