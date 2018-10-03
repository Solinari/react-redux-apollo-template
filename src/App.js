import React, { Component } from 'react';
import AddTestMessage from './components/AddTestMessage';
import DisplayTestMessage  from './components/DisplayTestMessage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddTestMessage/>
          <DisplayTestMessage/>
        </header>
      </div>
    );
  }
}

export default App;
