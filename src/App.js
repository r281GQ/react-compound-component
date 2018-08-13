import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from './Tab';
import Tab from './Tab/Tab';

const sampleArray = [
  'First which is normal',
  'Second which is disabled',
  'Third which is active'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Tabs defaultIndex={2}>
          {sampleArray.map((item, index) => (
            <Tab isDisabled={index === 1} key={index}>
              {item}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default App;
