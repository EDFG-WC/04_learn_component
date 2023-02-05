import React, { PureComponent } from 'react';
// 我们如果想要优化每个组件的渲染时间, 可以通过下面的方式对每个组件进行统计
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}

class Home extends PureComponent {
  componentWillMount() {
    this.beginTime = Date.now();
  }

  render() {
    return <h2>Home</h2>;
  }

  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log(`Home渲染时间: ${interval}`);
  }
}

class About extends PureComponent {
  componentWillMount() {
    this.beginTime = Date.now();
  }

  render() {
    return <h2>About</h2>;
  }

  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log(`About渲染时间: ${interval}`);
  }
}


