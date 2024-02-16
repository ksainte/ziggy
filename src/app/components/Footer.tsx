import React from 'react'
import "./Footer.css"
import Image from "next/image";
import Button from './Button'
import logo from '../assets/zbyszek.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
	faEtsy
  } from "@fortawesome/free-brands-svg-icons";
  
  const handleHomeClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional smooth scrolling
    });
  };
  
function Footer() {
  return (
    <div className="foot">
    
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="col-1">
						<Link href="/">
                            <Image src={logo} alt="" className="img-fluid logo-footer"/></Link>
                      <div className="footer-about">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                      </div>

					</div>
					<div className="col-md-1">
						<div className="useful-link">
							<h2>Useful Links</h2>
							<div className="use-links">
								
								<li>
								<a href="/"> Home</a>
									{/* <Link href="/#navbar"><a> Home</a> </Link> */}
								</li>
								<li><Link href="/about_page"> About Us</Link></li>
								<li><Link href="/services/art/#gallery">Gallery</Link></li>
								<li><Link href="/#contact">Contact</Link></li>
							</div>
						</div>

					</div>
                    <div className="col-md-3">
                        <div className="useful-link">
							<h2>Follow Us</h2>
							{/* <img src="./assets/images/about/home_line.png" alt=""> */}
                            
							<div className="use-links">
								<li><FontAwesomeIcon icon={faFacebook}   />
								<a href="https://www.facebook.com/"> Facebook
								</a></li>
								<li><FontAwesomeIcon icon={faInstagram}  />
								<a href="https://www.instagram.com/" > Instagram
								</a></li>
								<li><FontAwesomeIcon icon={faEtsy}  />
								<a href="https://www.etsy.com/" > Etsy
								</a></li>
							</div>
						</div>
                    

                    </div>
					<div className="col-md-3">
						<div className="useful-link">
							<h2>Contact</h2>
							{/* <img src="./assets/images/about/home_line.png" alt="" className="img-fluid"> */}
							<div className="address-links">
								<li className="address1"> Connecticut -
									New York</li>
								   <li> +91 90904500112</li>
								   <li> mail@1234567.com</li>
							</div>
						</div>
					</div>
                  
				</div>
			</div>

		</footer>

		<section id="copy-right">
			<div className="copy-right-sec">  
				lorem ispum lorem ispum 2022 Powerd By <a href="#">lorem ispum</a> 


			</div>

		</section>


    </div>
  )
}

export default Footer