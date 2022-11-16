import React, { Component } from "react";

export default class App extends Component {
  render() {
    const liArray = [];
    for (let movie of this.state.movies) {
      liArray.push(<li>{movie}</li>);
    }

    return (
      <div>
        <ul>
          {this.state.movies.map((item, index, arr) => {
            return <li>{item}</li>;
          })}
        </ul>
        <ul>
          {this.state.numbers
            .filter((item) => item > 50)
            .map((item, index, arr) => {
              return <li>{item}</li>;
            })}
        </ul>
      </div>
    );
  }
  constructor() {
    super();

    this.state = {
      movies: ["大话西游", "盗梦空间", "星际穿越", "流浪地球"],
      numbers: [110, 123, 50, 32, 55, 10, 8, 333],
    };
  }
}
