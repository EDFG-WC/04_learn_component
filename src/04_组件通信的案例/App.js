import React, { Component } from "react";
import TabControl from "./TabControl";
export default class App extends Component {
  render() {
    const { currentIndex } = this.state;
    return (
      <div>
        <TabControl
          titles={this.titles}
          itemClick={(index) => this.itemClick(index)}
        />
        <h2>{this.titles[currentIndex]}</h2>
      </div>
    );
  }

  constructor(props) {
    super(props);
    // 不会轻易的改变的数据, 放在state之外.
    this.titles = ["policy activity", "enquiry", "fund activity"];
    this.state = {
      currentIndex: 0,
    };
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    });
  }
}
