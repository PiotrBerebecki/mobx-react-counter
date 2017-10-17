import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        counter: 0,
    };

    increment = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1,
        }));
    };

    decrement = () => {
        this.setState(({ counter }) => ({
            counter: counter - 1,
        }));
    };

    render() {
        return (
            <div className="App">
                <p>Count: {this.state.counter}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default App;
