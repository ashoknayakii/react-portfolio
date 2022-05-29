import React from 'react'
import './Portfolio.css'
import OUI from '../../assets/images/ouiiipartyapp.png'
import GOSEE from '../../assets/images/goseeapp.png'
import DAILY from '../../assets/images/dailyagendaapp.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={OUI} alt="dashboard to ouiii party application" />
        </div>
        <h3>OUIII party</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/ashoknayakii/OUiii-1" className="btn" target="_blank">Github</a>
        <a href="https://ouiii-party.herokuapp.com/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={GOSEE} alt="Go See Movie Database application" />
        </div>
        <h3>Go See</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/ashoknayakii/go-see" className="btn" target="_blank">Github</a>
        <a href="https://ashoknayakii.github.io/go-see/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={DAILY} alt="Work day scheduler application" />
        </div>
        <h3>Work Day Scheduler</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/ashoknayakii/daily-agenda" className="btn" target="_blank">Github</a>
        <a href=" https://ashoknayakii.github.io/daily-agenda/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      </div>
    </section>
  )
}

export default portfolio
