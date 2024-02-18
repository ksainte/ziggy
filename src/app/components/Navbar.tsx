"use client";

import React from "react";
import "./Navbar.css";
import logo from "../assets/ZBD.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import header_home from "../assets/Header background for top of pages .jpg";


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar w-screen" id="navbar">
      

      <div className="navbar_comp">

          <div className="navbar_left">

          <Link href="/">
            <Image className="testin"src={logo} alt="LinkedIn" />
            </Link>
          </div>

        <div className="navbar_right">

          <ul className="navbar_links">
            <li>
              <Link href="/" className="links">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/services/art" className="links">
                Art
              </Link>
              <div className="dropdown-content">
                <Link href="/services/art/#fine_art" className="links">
                  Fine Art
                </Link>
                <Link href="/services/art/#sculpture" className="links">
                  Sculpture
                </Link>
                <Link href="/services/art/#renovation" className="links">
                  Renovation
                </Link>
              </div>
            </li>
            <li>
              <Link href="/restaurant_page" className="links">
                Restaurant
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="links">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>





        <div className="smallscreen">
          <GiHamburgerMenu
            className="ham"
            color="black"
            fontSize={30}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <GiHamburgerMenu
                fontSize={30}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <Link
                    href="/"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </Link>
                </li>
                
                <li className="dropdown">
                  <Link href="/services/art" className="links">
                    Art
                  </Link>
                  <div className="dropdown-content">
                    <Link
                     href="/services/art/#fine_art"
                      onClick={() => setToggleMenu(false)}
                      className="links"
                    >
                      Fine Art
                    </Link>
                    <Link
                     href="/services/art/#sculpture"
                      className="links"
                      onClick={() => setToggleMenu(false)}
                    >
                      Sculpture
                    </Link>
                    <Link
                      href="/services/art/#renovation"
                      className="links"
                      onClick={() => setToggleMenu(false)}
                    >
                      Renovation
                    </Link>
                  </div>
                </li>

                <li>
                  <Link
                    href="/restaurant_page"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    Restaurant
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    {" "}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>


    </div>

    
  );
}
