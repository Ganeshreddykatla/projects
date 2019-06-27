import React, { Component } from 'react';
import RouterComponent from './router/router';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {

    return (
      <div className="App-container">
        <RouterComponent />
      </div>

    )
  }

}


export default App;
