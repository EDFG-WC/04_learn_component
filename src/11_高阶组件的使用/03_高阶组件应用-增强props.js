import React, {createContext, PureComponent} from 'react';


// 通过Context来进行增强:
const UserContext = createContext({
  nickname: '默认',
  level: -1,
  region: '中国',
});

class Home extends PureComponent {
  render() {
    return (
        <UserContext.Consumer>
          {(user) => {
            return <h2>Home: {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}</h2>;
          }}
        </UserContext.Consumer>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
        <UserContext.Consumer>
          {(user) => {
            return <h2>Home: {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}</h2>;
          }}
        </UserContext.Consumer>
    );
  }
}

class App extends PureComponent {
  render() {
    return (
        <div>
          App
          <UserContext.Provider value={{nickname: 'alex', level: 90, region: '加拿大'}}>
            <Home/>
            <About/>
          </UserContext.Provider>
        </div>
    );
  }
}

export default App;
