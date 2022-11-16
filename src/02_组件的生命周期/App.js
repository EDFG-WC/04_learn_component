import React, {Component} from 'react';
//在类里写的叫做方法. 在类外面定义的叫做函数
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0, isShow: true
        }
        console.log('执行了组件的constructor方法')

    }

    increase() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changeCpnShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        console.log('执行了组件的render方法')
        return (<div>
            我是App组件
            <h2>当前计数: {this.state.counter}</h2>
            <button onClick={e => this.increase()}>+1</button>
            <hr/>
            <button onClick={e => this.changeCpnShow()}>切换</button>
            {this.state.isShow && <Cpn/>}
        </div>);
    }

    componentDidMount() {
        console.log('执行了componentDidMount方法')
    }

    componentDidUpdate() {
        console.log('执行了componentDidUpdate方法')
    }
}

// 注意: 所有继承了Component的都是组件
class Cpn extends Component {
    render() {
        return (<h2>我是Cpn组件</h2>)
    }

    componentWillUnmount() {
        console.log('调用了Cpn组件的componentWillUnmount方法')
    }
}