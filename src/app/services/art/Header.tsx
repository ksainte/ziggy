import React from 'react'
import './Header.css';
import header from '../../assets/h1.jpg';
import art_header from "../assets/Header background for top of pages .jpg";

import Image from "next/image";

function Header() {
  return (
    <div className='Header_art' >
    {/* <Image
    className="header-background" 
    src= {art_header}
    alt=""
    /> */}
      <div className='Header_components_art'>

      <div className='Header_center_art'>
        <h2>Arts</h2>
      </div>
      
      </div>
    </div>
  )
}

export default Header


