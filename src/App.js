import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Resourcelist } from './Resource';

const resources = [{
  name: "Christian Keller",
  availability: "1",
  id: 1
}, {
  name: "Christian Walter",
  availability: "1",
  id: 2
}, {
  name: "William Cirillo",
  availability: "1",
  id: 3
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Resourcelist data={resources} />
      </div>
    );
  }
}

export default App;
