import React, { Component } from 'react';
import './App.css';

import Router from './routes/AppRouter'


/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {

  handleClick = () =>{
    console.log("Hello world")
  }
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;
