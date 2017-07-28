import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';

import { store } from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{store.getState().counter}</h2>
        </div>
        <div>
          <button onClick={() => store.dispatch(actions.increment)} type="button">+</button>
          <button onClick={() => store.dispatch(actions.decrement)} type="button">-</button>
        </div> 
      </div>
    );
  }
}

export default App;
