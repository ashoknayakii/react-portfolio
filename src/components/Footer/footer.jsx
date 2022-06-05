import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
        <a href="#" className="footer__logo"></a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://facebook.com/piecesofthefire"><FaFacebookF/></a>
            <a href="https://instagram.com/ash.wagandha"><FiInstagram/></a>
            <a href="https://twitter.com/mynameisAsh1"><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyright"></div>
      
    </footer>
  )
}

export default Footer

