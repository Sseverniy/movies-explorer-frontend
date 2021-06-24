import React from 'react';
import './Portfolio.css';
import linkArrow from "../../images/arrow.svg";

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/Sseverniy/how-to-learn" target="_blank" rel="noreferrer">
            Статичный сайт
            <img className="portfolio__link-arrow" alt="Стрелка ссылки" src={linkArrow}/>
          </a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/Sseverniy/how-to-learn" target="_blank" rel="noreferrer">
            Адапативный сайт
            <img className="portfolio__link-arrow" alt="Стрелка ссылки" src={linkArrow}/>
          </a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/Sseverniy/how-to-learn" target="_blank" rel="noreferrer">
          Одностраничное приложение
            <img className="portfolio__link-arrow" alt="Стрелка ссылки" src={linkArrow}/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;