import React from 'react'
import './Header.css';
import header from '../../assets/h1.jpg';
import art_header from "../assets/Header background for top of pages .jpg";

import Image from "next/image";

function Header() {
  return (
    <div className='Header' >

      <div className='Header_components'>
      <article className="see">
      <h2 >We Create </h2>
      <div className='H'>
      <h2 className="flex">Art Spaces</h2>     
      <h3 className="ss">Design + Build + Art</h3>
      </div>
      </article>
      
      </div>
    </div>
  )
}

export default Header

 {/* <h2 className="flex">Art Spaces <h3 className="h3">Design + Build + Art</h3></h2> */}
