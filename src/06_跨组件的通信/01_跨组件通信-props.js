import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'alex wang',
      level: 99,
    };
  }

  render() {
    const { nickname, level } = this.state;
    return (
      <div>
        <Profile nickname={nickname} level={level}></Profile>
      </div>
    );
  }
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader nickname={props.nickname} level={props.level} />
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
    <div>
      <h2>用户昵称: alex wang</h2>
      <h2>用户等级: 99</h2>
    </div>
  );
}
