import React, {PureComponent} from 'react'; // 高阶函数的定义: 1. 接收一个或多个函数作为输入 2.输出一个函数 3.前2点满足一点就是高阶函数

// 高阶函数的定义: 1. 接收一个或多个函数作为输入 2.输出一个函数 3.前2点满足一点就是高阶函数
// 高阶组件的名字叫做HOC(Higher-Order Component): 参数为组件, 返回值为新组件的函数
// 所以高阶组件本身不是组件而是函数; 这个函数是一个组件, 返回值也是一个组件
class App extends PureComponent {
  render() {
    return <div>App:{this.props.name}</div>;
  }
}

//高阶组件
function enhanceComponent(WrappedComponent) {
  // NewComponent作为类名可以省略不写, 在浏览器会显示父类的名称PureComponent
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // 给NewComponent改别名
  NewComponent.displayName = 'Kobe';
  // 在这里return
  return NewComponent;
}

// 我们可以给App起个名字, 方便debug的时候看:
App.displayName = 'AlexWang';

const EnhanceComponent = enhanceComponent(App);

// 默认导出的类名可以随便取, 而倒入的地方也可以随便取. 因为default已经指定了导出的类是什么.
export default EnhanceComponent;
