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
    <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</h1>
 <div className='Design_components'>
      <h1 id="products">PRODUCTS</h1>
            <h2>PARTITION</h2>
            <Gallery images={[images.part1,images.part7, images.part5, images.part6,images.part4, images.part8, images.part9,images.part10, images.part11]}/>
            <h2>WALL FEATURES</h2>
            <Gallery images={[images.wall1, images.wall6,images.wall4, images.wall5, images.wall2,images.wall7]}/>
            <h2>CEILING</h2>
            <Gallery images={[images.ceiling1, images.ceiling2,images.ceiling3, images.ceiling4, images.ceiling5,images.ceiling6,images.designphoto3]}/>
            <h2>DOORS</h2>
            <Gallery images={[images.doors1, images.doors3]}/>
            <h2>SHELVES</h2>
            <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>


        <h1 className='mt' id="capabilities" >CAPABILITIES</h1>
            <h2>DIGITAL PRINTING</h2>
            <Gallery images={[images.DP, images.DP2, images.DP3]}/>
            <h2>FABRICATION</h2>
            <Gallery images={[images.FAB4, images.FAB5, images.FAB1,images.FAB2, images.FAB3, images.FAB6]}/>
            <h2>LIGHTING</h2>
            <Gallery images={[images.header,images.designphoto4,images.designhomepage]}/>
       
        <h1 className='mt' id="inspiration">INSPIRATION</h1>
        <h2>PROJECT GALLERY</h2>
        <Gallery images={[images.gallery01, images.gallery02, images.gallery03]}/>
       
        <h1 className='mt'id="murals">MURALS</h1>
        <Gallery images={[images.murals4, images.murals2, images.murals3,images.murals1, images.murals5, images.murals6,images.murals7, images.murals8,images.murals10]}/>
        

   </div>





</div>
  )
}

export default Our_Services_Design
