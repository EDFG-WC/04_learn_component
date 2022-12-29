import React, { createRef, PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.titleEl = null;
    this.counterRef = createRef();
  }

  render() {
    return (
      <div>
        {/*<h2 ref=字符串/对象/函数>Hello React</h2>*/}
        <h2 ref="titleRef">Hello React</h2>
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={(args) => (this.titleEl = args)}>Hello React</h2>
        <button onClick={(e) => this.changeTxt()}>改变文本</button>
        <hr />
        <Counter ref={this.counterRef} />
        <button onClick={(e) => this.appBtnClick()}>App按钮</button>
      </div>
    );
  }

  changeTxt() {
    // 1.使用方式一: 字符串(不推荐, 后续的更新会删除)
    this.refs.titleRef.innerHTML = 'Hello Alex';
    // 2.使用方式二: 对象方式(react推荐)
    this.titleRef.current.innerHTML = 'Hello JavaScript';
    // 3.使用方式三: 回调函数方式
    this.titleEl.innerHTML = 'Hello TypeScript';
  }

  appBtnClick() {
    this.counterRef.current.increment();
  }
}

// ref必须和class组件一起用, 函数式组件用不了
class Counter extends PureComponent {
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
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
