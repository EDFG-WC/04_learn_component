import React, { Component } from 'react';

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
        {/*<Profile nickname={nickname} level={level}></Profile>*/}
        <Profile {...this.state} />
      </div>
    );
  }
}

function Profile(props) {
  return (
    <div>
      {/*<ProfileHeader nickname={props.nickname} level={props.level} />*/}
      {/*这是JSX的一种语法, 相比上面的写法可以少写一些东西. 但是记得属性名称不能错*/}
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称: {props.nickname}</h2>
      <h2>用户等级: {props.level}</h2>
    </div>
  );
}
