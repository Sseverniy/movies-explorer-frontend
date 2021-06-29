import React from 'react';
import "./MoviesCard.css";
import moviePreview from "../../images/movie-preview.png";
import {useLocation} from "react-router-dom";

function MoviesCard({savedMovie, onSave}) {
  const location = useLocation();
  return (
    location.pathname === "/saved-movies" ?
    <li className="movie">
      <img className="movie__preview" alt="Превью фильма" src={moviePreview}/>
      <div className="movie__wrapper">
        <h2 className="movie__title">33 слова о дизайне</h2>
        <button className="movie__delete-button" type="button" aria-label="Удалить фильм" />
      </div>
      <p className="movie__duration">1ч42м</p>
    </li>
    :
    <li className="movie">
    <img className="movie__preview" alt="Превью фильма" src={moviePreview}/>
    <div className="movie__wrapper">
      <h2 className="movie__title">33 слова о дизайне</h2>
      <button className={savedMovie ? "movie__save-button movie__save-button_active" : "movie__save-button" } type="button" aria-label="Сохранить фильм" onClick={onSave}/>
    </div>
    <p className="movie__duration">1ч42м</p>
  </li>
  )
}

export default MoviesCard;