import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (<div>
            <h2>当前记数:{this.state.counter}</h2>
            <button onClick={e => this.increase()}>+</button>
            <CounterButton increase={this.increase.bind(this)}></CounterButton>
        </div>);
    }

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increase() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}

class CounterButton extends Component {

    render() {
        const {increase} = this.props;
        return (<button onClick={increase}>+1</button>)
    }

}