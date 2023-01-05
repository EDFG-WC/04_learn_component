import React, {PureComponent} from 'react';

// 假设我要添加一个属性region. 这个时候我应该可以设置一个公共的属性. 通过定义一个高阶组件来做:
function enhanceRegionProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="MITDC" />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

// 用高阶组件增强原有组件
const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="alex" level={90} />
        <EnhanceAbout nickname="kobe" level={199} />
      </div>
    );
  }
}

export default App;
