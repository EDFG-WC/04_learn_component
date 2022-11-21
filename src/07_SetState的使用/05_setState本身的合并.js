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
    // setState会在内部被合并, 这三次调用其实还是会只执行一次.
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // 我们要让setState合并时进行累加.
    this.setState((previousState, props) => {
      return {
        counter: previousState.counter + 1,
      };
    });
    this.setState((previousState, props) => {
      return {
        counter: previousState.counter + 1,
      };
    });
    this.setState((previousState, props) => {
      return {
        counter: previousState.counter + 1,
      };
    });
  }
}
