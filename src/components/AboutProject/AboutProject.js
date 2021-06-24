import React from 'react';
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <h2 className="about-project__heading">О проекте</h2>
      <ul className="about-project__wrapper">
        <li className="about-project__description">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__description">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__scale">
        <p className="about-project__scale-line about-project__scale-line_back">1 неделя</p>
        <p className="about-project__scale-line about-project__scale-line_front">4 недели</p>
        <p className="about-project__scale-text">Back-end</p>
        <p className="about-project__scale-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;