import React from 'react'
import { FaBook } from "react-icons/fa";
function Header() {
  return (
    <header className='header'>
      <div className="header-top">
        <div className="container header-top__content">
          <div className="header-top__schedule">
            Monday-Friday:9:00AM-6:00PM
          </div>
          <p className="header-top__address">
            Visit our showroom <a href="#">Contact us</a>
          </p>
          <div className="header-top__contacts">
            <div className="header-top__phone">
            Call Us: <a href="tel:001257679856">(0012)57679856</a>
            </div>
             <a href="https://facebook.com">
            <img src="" alt="F" />
          </a>
          <a href="https:instagram.com">
            <img src="" alt="I" />
          </a>
          </div>
        </div>
      </div>
      <div className="container header-main">
        <img  src='' alt="" className='logo'/>
        <nav className="links">
          <a href="#">About us</a>
          <a href="#">All other </a>
          <a href="#"> Our Deals</a>
          <a href="#"> Contact</a>
        </nav>
       <div className="actions">
          <button className='btn'>
            <img src="" alt="" />
          </button>
          <button className='btn'>
            <img src="" alt="" />
          </button>
          <button className="avatar">
            <img src="" alt="" />
          </button>
       </div>
      </div>

    </header>
  )
}

export default Header