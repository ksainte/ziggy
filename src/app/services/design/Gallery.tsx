'use client'

import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from "next/image";

// import SubHeading  from '../../components/Subheading/Subheading';
import images from './images';
import './Gallery_design.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="Gallery_design">

         <h1>My Design Gallery</h1>
         <div className='Gallery_components_design'>

            <article className='Gallery_Up_design'>
                <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
            </article>

      <div className="Gallery_Down_design">

        <div className="app__gallery" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04,
          images.gallery01,images.gallery02,images.gallery04,images.gallery03,images.gallery01].map((image, index) => (
            <div className="app__gallery-images" key={`gallery_image-${index + 1}`}>
              <Image src={image} alt="gallery_image" />
              {/* <BsInstagram className="gallery__image-icon" /> */}
            </div>
          ))}
        </div>

        <div className="app__gallery_arrows">
          <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('right')} />
        </div>

      </div>

        </div>
    </div>
  );
};

export default Gallery;