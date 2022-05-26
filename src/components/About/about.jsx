import React from 'react'
import './About.css'
import Random from '../../assets/images/feetatmontauk.jpeg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
 
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Random} alt="Feet at Montauk" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>N/A</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>N/A</small>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sequi earum in facilis eos quibusdam, placeat mollitia ad debitis, excepturi rerum consequuntur distinctio pariatur praesentium repudiandae natus perspiciatis dolores omnis!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

        {/* // <p>Ashok Nayak is a full stack developer with a background in music and hospitality.  Prior to his entry into web development, he spent his time writing, collaborating and performing original music as well as working at some of the top restaurants in NYC.  He brings a diverse array of skills with a focus on developing tools and digital infrastructure to support artists in the music industry. </p> */}
