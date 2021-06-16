import './AboutMe.css';
import studentPic from '../../images/student.png';

function AboutMe() {
  return(
    <section className="aboutme">
      <h2 className="aboutme__heading">Студент</h2>
      <div className="aboutme-info">
        <div className="aboutme-info__wrapper">
          <h3 className="aboutme-info__name">Виталий</h3>
          <p className="aboutme-info__short">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme-info__description">Я родился и живу в Саратове, закончил факультет 
          экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
          С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
          начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="aboutme-info__links">
            <li className="aboutme-info__link-list">
              <a className="aboutme-info__link" href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="aboutme-info__link-list">
              <a className="aboutme-info__link" href="https://github.com/Sseverniy" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="aboutme-info__img" alt="Фото студента" src={studentPic}/>
      </div>
    </section>
  );
};

export default AboutMe;