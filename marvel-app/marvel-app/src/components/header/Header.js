import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/marvel-logo.svg'
import './header.css'

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="headerLeft">
                <Link to= "/"><img src={Logo} alt="" className='header_icon' /></Link>
                <Link to= "/characters" style={{textDecoration: "none"}}><span>Characters</span></Link>
                <Link to= "/comics" style={{textDecoration: "none"}}><span>Comics</span></Link>
                <Link to= "/creators" style={{textDecoration: "none"}}><span>Creators</span></Link>
                <Link to= "/series" style={{textDecoration: "none"}}><span>Series</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Header