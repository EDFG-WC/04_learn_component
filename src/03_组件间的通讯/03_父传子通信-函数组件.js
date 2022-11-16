import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (<div>
            <ChildCpn name='wc' age={18} height={1.88} names={['abc', 'cba']}/>
            <ChildCpn name='why' age={98} height={1.77} names={['nba', 'mlb']}/>
            <ChildCpn/>
        </div>);
    }
}

export default App;

function ChildCpn(props) {
    const {name, age, height} = props;
    const {names} = props;
    return (<div>
        <h2>{name + ' ' + age + ' ' + height}</h2>
        <ul>
            {names.map((item, index) => {
                return <li>{item}</li>
            })}
        </ul>
    </div>);
}

ChildCpn.propTypes = {
    name: PropTypes.string, age: PropTypes.number, height: PropTypes.number, names: PropTypes.array
}

ChildCpn.defaultProps = {
    name: 'haha', age: 30, height: 1.98, names: ['aaa', 'bbb']
}

