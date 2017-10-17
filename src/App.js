import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './App.css';

class App extends Component {
    render() {
        const { counter } = this.props;
        return (
            <div className="App">
                <p>Count: {counter.count}</p>
                <button onClick={() => counter.decrement()}>-</button>
                <button onClick={() => counter.increment()}>+</button>
            </div>
        );
    }
}

export default observer(App);
