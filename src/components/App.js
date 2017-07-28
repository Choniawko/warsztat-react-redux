import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTaskContainer from '../containers/AddTask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Header</h2>
          <AddTaskContainer />
          {/*  <TaskLIst /> */}
        </div>
      </div>
    );
  }
}

export default App;
