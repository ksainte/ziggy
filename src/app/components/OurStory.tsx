import React from 'react'
import "./OurStory.css"
import about from '../assets/about photo for home page .jpg';


import ziggy from '../assets/ziggy.jpg';
import Link from 'next/link';

import Image from "next/image";
import Button from './Button'


function OurStory() {
  return (
    <div className='Services'>
         <h1>Artistic Statment</h1>
     
         <div className='About_components1'>
                <article className='About_leftside1'>                
                <p> <Image src={ziggy} alt="header_img" />

                 <p >Time and faith produced a more intriguing work of art. I live a life style of observation and
creation. Producing art is my positive contribution to the society. The work I produce both
symbolized and creates optimism for life in our industrialized society. My artwork has been
executed by the use of computer based layouts and constructed with various art mediums
such as metal tubing, canvas, cement, transparent vinyl materials. For example I'm using
solar energy to light the sculpture inside offering viewers a different sculptural experience
from inside offering from that of the daytime. </p>         
                
                <p > The historic influence of my work are Rembrant and Caravaggio. Their uses of color form
and medium have proved a good reference for setting my personal standard.
Lakeways my contemporary influence witch Dali and Beksinski have challenged to raise my
concept of modern public art.
I find that my art style is fully expressed through public sculptures.
I have successfully installed large scale sculpture
temporarily and permanently. I believe that public art transforms the way people look at visual phenomena in
their environment. </p>
                </p>

                
              
                </article>
                 
            </div>
  
    </div>
  )
}

export default OurStory