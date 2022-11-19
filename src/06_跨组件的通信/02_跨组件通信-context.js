import React, {Component} from 'react';

// 使用Context进行跨组件通信, 这里创建的2个属性都是默认值. 保证在引用错误的情况下显示值.
const UserContext = React.createContext({
  nickname: '托塔天王',
  level: 18,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'alex wang',
      level: 199,
    };
  }

  render() {
    //const { nickname, level } = this.state;
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
        <UserContext.Provider value={this.state}></UserContext.Provider>
        <Profile />
      </div>
    );
  }
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

// 3.和上一个例子不同的是, 只有类组件才有Context对象.
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户昵称: {this.context.nickname}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    );
  }
}

// 2.把创建的UserContext赋值给ProfilerHeader组件
ProfileHeader.contextType = UserContext;
