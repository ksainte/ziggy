import React from 'react'
import "./OurStory.css"
import about from '../assets/about photo for home page .jpg';


import ziggy from '../assets/ziggy.jpg';
import Link from 'next/link';

import Image from "next/image";
import Button from './Button'


function OurStory() {
  return (
    <div className='Story' >
         <h1>Our Story</h1>
     
      <div className='Services_components3'>
        <article className='Services_leftside1'>
          <h1>Subtitle</h1>
         
          <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
          
          <Button
            styles={'custom__button1'}
            type={'button'}
            title={'Open Art'}
            disabled={false}
            >
              <Link href="/about_page" > See Our Story</Link>

            </Button>
        </article>

        <div className='Services_rightside3'>
        <Image src={ziggy} alt="header_img" />
        </div>

      </div>
  
    </div>
  )
}

export default OurStory