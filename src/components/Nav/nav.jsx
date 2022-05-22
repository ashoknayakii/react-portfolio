import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {FiMessageCircle} from 'react-icons/fi'



const nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><BiUserCircle/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><MdMiscellaneousServices/></a>
      <a href="#contact"><FiMessageCircle/></a>
    </nav> 

  )
}

export default nav
