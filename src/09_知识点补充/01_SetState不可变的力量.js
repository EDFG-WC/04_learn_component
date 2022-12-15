import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: 'lilei', age: 20 },
        { name: 'lily', age: 25 },
        { name: 'lucy', age: 22 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>好友列表:</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                姓名: {item.name}
                年龄: {item.age}
                <button onClick={(e) => this.incrementAge(index)}>age+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.insertData()}>添加数据</button>
      </div>
    );
  }

  // 简称scu
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.friends !== this.state.friends) {
      return true;
    }
    return false;
  }

  insertData() {
    console.log('data inserted');
    // 不要这样更新数据: 当我们有一个scu的时候, 这样的方式是不能引发更新的.
    // const newData = { name: 'tom', age: 30 };
    // this.state.friends.push(newData);
    // this.setState({
    //   friends: this.state.friends,
    // });
    const newFriends = [...this.state.friends];
    newFriends.push({ name: 'tom', age: 30 });
    this.setState({
      friends: newFriends,
    });
  }

  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    });
  }
}
