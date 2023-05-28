import React, { Component } from 'react';
import Header from './components/header';
import Showcase from './components/showcase';
import Cards from './components/cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Showcase />
        <Cards />
      </div>
    );
  }
}

export default App;
