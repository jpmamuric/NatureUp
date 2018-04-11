import React, { Component } from 'react';

import './App.scss'

import Header from  '../header/Header';
import About from '../about/About';
import Features from '../features/Features';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Features />
        </main>
      </div>
    );
  }
}

export default App;
