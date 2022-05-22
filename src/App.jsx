import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer' 

const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        {/* <Footer /> */}
      
    </div>
  )
}

export default App
