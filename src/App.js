import React, { Component } from 'react';
import AddTestMessage from './components/AddTestMessage';
import DisplayTestMessage  from './components/DisplayTestMessage';
import Grid from './components/grid/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddTestMessage/>
          <DisplayTestMessage/>
          <Grid/>
        </header>
      </div>
    );
  }
}

export default App;
