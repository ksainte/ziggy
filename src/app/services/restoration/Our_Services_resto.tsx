import React from 'react'
import BoberwArt from '../../assets/BoberwArt.jpg';
import resto1 from '../../assets/restoration photo 1.jpg';
import resto2 from '../../assets/restoration photo 2.jpg';
import resto3 from '../../assets/restoration photo 3.jpg';


import "./Our_Services_resto.css"
import Image from "next/image";
import Button from '../../components/Button'
import Gallery from "./Gallery";



function Our_Services_resto() {
  return (
    <div className='Restoration' >
    <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h1>
 <div className='Restoration_components'>

   <div className='Restoration_leftside'>
   <Image src={resto1} alt="header_img" />
   </div>

   <article className='Restoration_rightside'>
     <h1>Picasso</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  </p>

   </article>
   </div>

   <div className='Restoration_components1'>
   <article className='Restoration_leftside1'>
     <h1>Monet</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
   </article>

   <div className='Restoration_rightside1'>
   <Image src={resto2} alt="header_img" />
   </div>
   </div>

   <div className='Restoration_components2'>

     <div className='Restoration_leftside2'>
   <Image src={resto3} alt="header_img" />
   </div> 

   <article className='Restoration_rightside2'>
     <h1>Rubens</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
 
   </article>
   

   </div>
<Gallery/>

</div>
  )
}

export default Our_Services_resto
