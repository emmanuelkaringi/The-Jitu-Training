import React from 'react'
import Logo from '../assets/images/logo.svg'

function Header() {
  return (
    <header className="header">
    <div>
      <img src={Logo} alt="News Page Logo" />
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  </header>
  )
}

export default Header