import React, { Component } from 'react';

import './App.scss'

import Header from  '../header/Header';
import About from '../about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
        </main>
      </div>
    );
  }
}

export default App;
