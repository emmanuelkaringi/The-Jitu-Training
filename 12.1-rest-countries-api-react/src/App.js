import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Countries from './components/countries'
import Country from './components/country'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Countries />} />
          <Route path="/countries/:name" element={<Country />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App