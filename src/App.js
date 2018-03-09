import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/layout/Game.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">M<img src={logo} className="App-logo" alt="logo" />vie  Gh<img src={logo} className="App-logo" alt="logo" />st</h1>
        </header>
        <Game></Game>
      </div>
    );
  }
}

export default App;
