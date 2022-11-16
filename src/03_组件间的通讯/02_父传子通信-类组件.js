import React, {Component} from 'react';

class App extends Component {
    render() {
        return (<div>
            <ChildCpn name='wc' age='19' height='1.88'/>
            <ChildCpn name='why' age='99' height='1.50'/>
        </div>);
    }
}

export default App;

class ChildCpn extends Component {
    render() {
        const {name, age, height} = this.props;
        return (<h2>子组件展示数据:{name + ' ' + age + ' ' + height}</h2>)
    }

    /* constructor(props) {
            super();
            this.props = props;
        }*/
}