import React from 'react'
import './Header.css';
import header from '../assets/h1.jpg';
import Image from "next/image";

function Header() {
  return (
    <div className='Header_about' >
    <Image
    className="header-bg_about"
    src= {header}
    alt=""
    />
      <div className='Header_components_about'>

      <div className='Header_leftside_about'>
        <h2>Our Vision</h2>
      </div>
      
      </div>
    </div>
  )
}

export default Header
