import React from 'react'
import img from "./photo.png"
import Button from './Button'
import {FaEnvelope, FaLinkedin,} from 'react-icons/fa'
import '../../src/index.css';

// import '../../src/index.css';

function Header() {
  return (
    <div className='header-content'>

        <div className='image'>
         <img src={img} alt="" />
        </div>

        <h1 className='header-title'>Lara Smith</h1>

        <h3>Frontend Developer</h3>
        <h4>Larasmith.website</h4>

        <div className='btn-row'>
            <Button text="Email"
                    icon = {<FaEnvelope/>}
                    color ="white"
                    textcolor= "black"
            />

            <Button text="LinkedIN"
                    icon = {<FaLinkedin/>} 
                    color = "#5093E2" 
                    textcolor= "white"
            />
        </div>

    </div>
    )
}
export default Header