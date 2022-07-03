import React from 'react'
import logo from '../../icons/icons8-книга-96.png'
import avatar from '../../icons/avatar.png'
import { ReactComponent as Search } from '../../icons/Search.svg'
import { ReactComponent as Basket } from '../../icons/Card.svg'
import { ReactComponent as FacebookIcon } from '../../icons/Facebook.svg'
import { ReactComponent as InstagramIcon } from '../../icons/insta.svg'
import './header.css'
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
              <FacebookIcon />
            </a>
            <a href="https:instagram.com">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container header-main">
        <img src={logo} alt="" className='logo' />
        <nav className="links">
          <a href="#">About us</a>
          <a href="#">All other </a>
          <a href="#"> Our Deals</a>
          <a href="#"> Contact</a>
        </nav>
        <div className="actions">
          <button className='btn'>
            <Search />
          </button>
          <button className='btn'>
            <Basket />
          </button>
          <button className="avatar">
            <img src={avatar} alt="" />
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header