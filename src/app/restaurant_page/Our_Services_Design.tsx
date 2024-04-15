import React from 'react'
import BoberwArt from '../../assets/BoberwArt.jpg';
import art1 from '../../assets/art photo 1.jpg';
import art2 from '../../assets/art photo 2.jpg';
import art3 from '../../assets/art photo 3.jpg';


import "./Our_Services_Design.css"
import Image from "next/image";
// import Button from '../../components/Button'
import Gallery from "../services/art/Gallery";
import images from '../services/art/images';




function Our_Services_Design() {
  return (
    <div className='Design' >
    <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h1>
 <div className='Design_components'>
      <h1 id="products">PRODUCTS</h1>
            <h2>PARTITION</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
            <h2>WALL FEATURES</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
            <h2>CEILING</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
            <h2>DOORS</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
            <h2>SHELVES</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>


        <h1 className='mt' id="capabilities" >CAPABILITIES</h1>
            <h2>DIGITAL PRINTING</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
            <h2>FABRICATION</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
            <h2>LIGHTING</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
        <h1 className='mt' id="inspiration">INSPIRATION</h1>
        <h2>PROJECT GALLERY</h2>
        <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
        <h1 className='mt'id="murals">MURALS</h1>
        <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
        

   </div>





</div>
  )
}

export default Our_Services_Design
