import React from 'react'

import BoberwArt from '../assets/BoberwArt.jpg';
import art from '../assets/Art photo home page .jpg';
import design from '../assets/Design photo home page .jpg';
import resto from '../assets/restoration photo home page .jpg';




import "./Our_Services.css"
import Image from "next/image";
import Button from './Button'
import Link from 'next/link';



function Our_Services() {
  return (
    <div className='Services' >

         <h1>About</h1>

      <div className='Services_components'>

        <article className='article'>

          <p className='p'> The quick-serve and fast-casual restaurant space is our sweet spot with 25+ years of experience.
Our service approach allows our clients to benefit from our expertise in building new concepts or refreshing brands.
We provide complete restaurant interior and exterior solutions. These include mostly custom made products, bars, and murals.
With our full capabilities ranging from floor plans to original fine arts.
Each project is created witch the personal involvement of Ziggy Bober, who is an artist, designer and company owner.</p>

          <p className='p1'> “Art washes away from the soul the dust of everyday life” </p>
          <p className='p2'> M. Aurelius</p>
    
        </article>

        </div>      
    </div>
  )
}

export default Our_Services
