import React from 'react'
import img from "./logo.png"
import '../../src/index.css';

function Header() {
  return (
    <div>
    <div className="navbar">
       <img className='img' src= {img} alt="" width = "40px"/>
       <ul className='nav'>
        <li>Pricing</li>
        <li>Menu</li>
        <li>Contacts</li>
       </ul>
    </div>
    </div>
  )
}

export default Header