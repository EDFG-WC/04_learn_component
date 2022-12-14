import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: '你好啊, 王小波',
    };
  }

  render() {
    console.log('App render函数被调用');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  // 只要执行这个方法, 就会重新执行render方法, 整个组件都会被重新执行.
  increment() {
    console.log('increase 方法执行了.');
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeText() {
    this.setState({
      message: '你好啊, 李银河',
    });
  }

  // 默认返回true, 设置为返回false就会停止component更新
  // 有些属性需要更新, 有些属性不需要更新. 我们可以在这个方法里进行优化.
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }
}

// Header
function Header() {
  console.log('Header被调用');
  return <h2>我是Header组件</h2>;
}

class Main extends PureComponent {
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

class Banner extends PureComponent {
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
