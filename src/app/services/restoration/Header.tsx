import React from 'react'
import './Header.css';
import header from '../../assets/h1.jpg';
import resto_header from '../../assets/restoration photo home page .jpg';

import Image from "next/image";
import Button from '../../components/Button'

function Header() {
  return (
    <div className='Header_Restoration' >
    <Image
    className="header-bg_Restoration"
    src= {resto_header}
    alt=""
    />
      <div className='Header_components_Restoration'>

      <div className='Header_leftside_Restoration'>
        <h2>Restoration</h2>
      </div>
      
      </div>
    </div>
  )
}

export default Header
