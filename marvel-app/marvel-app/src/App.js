import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import './App.css';
import CharacterList from './components/lists/CharacterList';
import CharacterD from './components/pages/characterdetails/Character';
import ComicList from './components/lists/ComicList';
import CreatorList from './components/lists/CreatorList';
import SeriesList from './components/lists/SeriesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='character/:id' element={<CharacterD />}></Route>
            <Route path="characters" element={<CharacterList />}></Route>
            <Route path="comics" element={<ComicList />}></Route>
            <Route path="creators" element={<CreatorList />}></Route>
            <Route path="series" element={<SeriesList />}></Route>
            <Route path='/*' element={<h1>Error page</h1>}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
