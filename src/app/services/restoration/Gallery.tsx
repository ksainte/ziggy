'use client'

import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from "next/image";

// import SubHeading  from '../../components/Subheading/Subheading';
import images from './images';
import './Gallery.css';

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
    <div className="Gallery_resto">

         <h1>My Restoration Gallery</h1>
         <div className='Gallery_components_resto'>

            <article className='Gallery_Up_resto'>
                <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
            </article>

      <div className="Gallery_Down_resto">

        <div className="app_images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04,
          images.gallery01,images.gallery02,images.gallery04,images.gallery03,images.gallery01].map((image, index) => (
            <div className="app_images_card" key={`gallery_image-${index + 1}`}>
              <Image src={image} alt="gallery_image" />
              {/* <BsInstagram className="gallery__image-icon" /> */}
            </div>
          ))}
        </div>

        <div className="app_images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>

      </div>

        </div>
    </div>
  );
};

export default Gallery;