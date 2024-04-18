import React from 'react'
import BoberwArt from '../../assets/BoberwArt.jpg';
import art1 from '../../assets/art photo 1.jpg';
import art2 from '../../assets/art photo 2.jpg';
import art3 from '../../assets/art photo 3.jpg';


import "./Our_Services_Art.css"
import Image from "next/image";
import Button from '../../components/Button'
import Gallery from "./Gallery";
import images from './images';




function Our_Services_Art() {
  return (
    <div className='Art' >
    <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
 <div className='Art_components'>
      <h1  id="fine_art">FINE ART</h1>
      <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
        <h1 className='mt' id="sculpture">SCULPUTURE</h1>
        <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
        <h1 className='mt' id="renovation">RENOVATION</h1>
        <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
        

   </div>





</div>
  )
}

export default Our_Services_Art

// [images.gallery01, images.gallery02, images.gallery03, images.gallery04,
//   images.gallery01,images.gallery02,images.gallery04,images.gallery03,images.gallery01]