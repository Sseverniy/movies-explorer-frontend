import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <>
      <ul className="movies-list">
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
      <button className="movies__more-button" type="button" aria-label="Открыть больше фильмов">
        Еще</button>
    </>
  );
}

export default MoviesCardList;