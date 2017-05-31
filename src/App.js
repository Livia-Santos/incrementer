import React, { Component } from 'react';
import logo from './logo.svg';
import Incrementer from "./components/Incrementer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Incrementer/>
        <br/>
        <hr/>
        <Incrementer/>
        <br/>
        <hr/>
        <Incrementer/>

      </div>
    );
  }
}

export default App;
