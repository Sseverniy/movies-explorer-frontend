import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({savedMovie, onSave}) {
  return (
    <>
      <ul className="movies-list">
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
        <MoviesCard savedMovie={savedMovie} onSave={onSave}/>
      </ul>
      <button className="movies__more-button" type="button" aria-label="Открыть больше фильмов">
        Еще</button>
    </>
  );
}

export default MoviesCardList;