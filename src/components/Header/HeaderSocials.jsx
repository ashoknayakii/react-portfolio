import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="rel=noopener"><BsLinkedin /></a>
        <a href="https://github.com" target="rel=noopener"><FaGithub /></a>
        <a href="https://twitter.com" target="rel=noopener"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials
