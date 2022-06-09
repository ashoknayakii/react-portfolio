import React from 'react'
import './header.css'
import CTA from './calltoaction'
import ME from '../../assets/images/portfolioprofile.jpeg'
import HeaderSocials from './socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Ashok Nayak</h1>
      <h5 classname="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header
