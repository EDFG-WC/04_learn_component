import React, { PureComponent } from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter();

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.emmitEvent()}>点击profile按钮</button>
      </div>
    );
  }

  emmitEvent() {
    eventBus.emit('nihao', 123, 'Hello Profile');
  }
}

class Home extends PureComponent {
  //此处添加事件监听
  componentDidMount() {
    // eventBus.addListener('nihao', (args) => {});
    eventBus.addListener('nihao', this.handleSayHiListener);
  }

  //此处取消事件监听
  componentWillUnmount() {
    eventBus.removeListener('nihao', this.handleSayHiListener);
  }

  //单独的listener
  handleSayHiListener(num, message) {
    console.log(num, message);
  }

  render() {
    return <div>Home</div>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
