import React, {Component} from 'react';

// 多个context进行嵌套, 我们有必要知道.
const UserContext = React.createContext({
  nickname: '托塔天王',
  level: 18,
});

const ThemeContext = React.createContext({
  color: 'red',
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
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: 'bule' }}>
            <Profile />
          </ThemeContext.Provider>
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

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext>
            {(theme) => {
              return (
                <div>
                  <h2>用户昵称: {value.nickname}</h2>
                  <h2>用户等级: {value.level}</h2>
                  <h2>颜色: {theme.color}</h2>
                </div>
              );
            }}
          </ThemeContext>
        );
      }}
    </UserContext.Consumer>
  );
}
