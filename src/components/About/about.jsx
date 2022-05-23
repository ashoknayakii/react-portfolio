import React from 'react'
import './About.css'
import Random from '../../assets/images/feetatmontauk.jpeg'
import {BiAward} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Random} alt="Feet at Montauk" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiAward className='about_icon' />
              <h5>Experience</h5>
              <small>N/A</small>
            </article>

            <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiAward className='about_icon' />
              <h5>Experience</h5>
              <small>N/A</small>
            </article>

            <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiAward className='about_icon' />
              <h5>Experience</h5>
              <small>N/A</small>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About

        {/* // <p>Ashok Nayak is a full stack developer with a background in music and hospitality.  Prior to his entry into web development, he spent his time writing, collaborating and performing original music as well as working at some of the top restaurants in NYC.  He brings a diverse array of skills with a focus on developing tools and digital infrastructure to support artists in the music industry. </p> */}
