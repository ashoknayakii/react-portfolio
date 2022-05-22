import React from 'react'
import './about.css'
// import coverImage from "./assets/images/portfolioprofile.jpeg";

function About() {
    return (
      <section className="my-5">
        <h1 id="about">About Me:</h1>
        {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
        <p>Ashok Nayak is a full stack developer with a background in music and hospitality.  Prior to his entry into web development, he spent his time writing, collaborating and performing original music as well as working at some of the top restaurants in NYC.  He brings a diverse array of skills with a focus on developing tools and digital infrastructure to support artists in the music industry. </p>
      </section>
    );
  }
  
export default About;