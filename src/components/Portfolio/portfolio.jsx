import React from "react";
import "./Portfolio.css";
import OUI from "../../assets/images/ouiiipartyapp.png";
import GOSEE from "../../assets/images/goseeapp.png";
import DAILY from "../../assets/images/dailyagendaapp.png";


const data = [
  {
    id: 1,
    image: OUI,
    title: 'OUIII',
    alt: "dashboard to ouiii party application",
    github: "https://github.com/ashoknayakii/OUiii-1",
    demo: "https://ouiii-party.herokuapp.com/",
  },
  {
    id: 2,
    image: GOSEE,
    title: 'GOSEE',
    alt: "gosee movie database application",
    github: "https://github.com/ashoknayakii/go-see",
    demo: "https://ashoknayakii.github.io/go-see/",
  },
  {
    id: 3,
    image: DAILY,
    title: 'Daily Agenda',
    alt: "workday scheduler application",
    github: "https://github.com/ashoknayakii/daily-agenda",
    demo: "https://ashoknayakii.github.io/daily-agenda/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, alt, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={alt} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
