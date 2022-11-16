import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.btnClick}>按钮</button>
        <ul>
          {/*开发中真正使用的是这种方式: 所有参数+event都有了*/}
          {this.state.movies.map((item, index, arr) => {
            return (
              <li
                className="item"
                onClick={(e) => {
                  this.liClick(item, index, e);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      movies: ["海王", "盗梦空间", "流浪地球", "大话西游"],
    };
  }

  // 这个event是react内部合成的对象
  btnClick(event) {
    console.log("按钮发生了点击", event);
  }

  liClick(item, index, event) {
    console.log("li发生了点击:", item, index, event);
  }
}
