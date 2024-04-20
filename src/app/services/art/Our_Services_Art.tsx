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
import OurStory from "../../components/OurStory";





function Our_Services_Art() {
  return (
    <div className='Services' >
        {/* <h1>About</h1> */}
    {/* <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1> */}
    <OurStory/> 
 <div className='Art_components'>
      <h1  id="fine_art">FINE ART</h1>
      <Gallery images={[images.p1,images.p2,images.p3,images.fa1,images.art1, images.fa2, images.fa3]}/>
        <h1 className='mt' id="sculpture">SCULPUTURE</h1>
        <Gallery images={[ images.s13,images.art2,images.art_photo,images.s1, images.s11, images.s7, images.s8,images.s2,images.s5, images.s6,images.bober_scultpure,images.Boberart]}/>
        <h1 className='mt' id="renovation">RENOVATIONS</h1>
        <Gallery images={[images.resto2, images.resto3, images.resto4,images.resto5, images.resto6, images.resto7,images.resto8, images.resto9, images.rp4,images.rp5]}/>

   </div>





</div>
  )
}

export default Our_Services_Art

// [images.gallery01, images.gallery02, images.gallery03, images.gallery04,
//   images.gallery01,images.gallery02,images.gallery04,images.gallery03,images.gallery01]