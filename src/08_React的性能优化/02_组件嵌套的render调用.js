import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log('App render函数被调用');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  // 只要执行这个方法, 就会重新执行render方法, 整个组件都会被重新执行.
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

// Header
function Header() {
  console.log('Header被调用');
  return <h2>我是Header组件</h2>;
}

class Main extends Component {
  render() {
    console.log('Main render函数被调用');
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

class Banner extends Component {
  render() {
    console.log('Banner render函数被调用');
    return <h3>我是Banner组件</h3>;
  }
}

function ProductList() {
  console.log('ProductList被调用');
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  );
}

// Footer
function Footer() {
  console.log('Footer被调用');
  return <h2>我是Footer组件</h2>;
}
