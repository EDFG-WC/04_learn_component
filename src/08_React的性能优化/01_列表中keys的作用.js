import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map((item, index, arr) => {
            {
              /*使用index作为key, 性能得不到优化*/
            }
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={(e) => this.insertMovie()}>添加电影</button>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      movies: ['大话西游', '盗梦空间', '星际穿越', '流浪地球'],
    };
  }

  insertMovie() {
    this.setState({
      movies: ['哈利波特', ...this.state.movies],
    });
  }
}
