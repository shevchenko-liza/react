import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    state = {
        list: [],
        text: '',

    }
    handleChange = event => {
        this.setState({ text: event.target.value })


    }

    handleRemove = event => {
        event.preventDefault()
        this.setState({text: event.target.value})
      
      }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ list: [...this.state.list, this.state.text] })


    }


    render = () => (
        <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>
                    add
                </button>
                <button onClick={this.handleRemove}>
                    remove
                </button>
            </form>

            <ul>
                {this.state.list.map(item => (
                    <li>
                        {item}
                    </li>
                ))}

            </ul>
        </>

    )

}

export default App;