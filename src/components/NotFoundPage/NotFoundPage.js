import React from 'react';
import "./NotFoundPage.css";

function NotFoundPage({goBack}) {
  return(
    <section className="not-found">
      <div className="not-found__info">
        <h2 className="not-found__heading">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button className="not-found__button" onClick={goBack}>Назад</button>
    </section>
  );
}

export default NotFoundPage;