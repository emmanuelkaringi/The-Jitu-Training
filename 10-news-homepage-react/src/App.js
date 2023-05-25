import React, { Component } from 'react';
import Header from './header';
import Showcase from './showcase';
import Cards from './cards';
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
