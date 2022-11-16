import React, {Component} from "react";

// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             message: '你好啊, 李银河'
//         }
//     }
//
//     render() {
//         return (<div>
//             <span>我是app组件</span>
//             <h2>{this.state.message}</h2>
//         </div>)
//     }
// }

export default function App() {
    return (<div>
        <div>我是function组件: App组件</div>
        <h2>你好啊, 王小波</h2>
    </div>)
}
