import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  movies,
  checkMovies,
  savedMovies,
  changePreloaderStatus,
  cardCounter,
  cardCounterMore,
  saveMovie,
  deleteMovie,
  checkOwner,
  currentList,
  setCurrentList,
  showMoreButton, 
  setShowMoreButton
}) {
  const location = useLocation();

  // const [showMoreButton, setShowMoreButton] = React.useState(false);

  function setMoviesList(movies) {
    const newList = movies.slice(0, cardCounter);
    if (newList.length === 0) {
      setCurrentList(movies);
    } else {
      setCurrentList(newList);
    }
  }

  // function handleMoreMovies() {
  //   const cardsLeft = movies.length - currentList.length;
  //   if (cardsLeft < cardCounterMore) {
  //     setCurrentList(movies.slice(0, currentList.length + cardsLeft));
  //     setShowMoreButton(false);
  //   } else {
  //     setCurrentList(movies.slice(0, currentList.length + cardCounterMore));
  //   }
  // }

  // function handleMoreSavedMovies() {
  //   const cardsLeft = checkOwner.length - currentList.length;
  //   debugger;
  //   if (cardsLeft < cardCounterMore) {
  //     setCurrentList(savedMoviesList.slice(0, currentList.length + cardsLeft));
  //     setShowMoreButton(false);
  //   } else {
  //     setCurrentList(savedMoviesList.slice(0, currentList.length + cardCounterMore));
  //   }
  // }

  function handleMoreMovies(movies) {
    const cardsLeft = movies.length - currentList.length;
    if (cardsLeft < cardCounterMore) {
      setCurrentList(movies.slice(0, currentList.length + cardsLeft));
      setShowMoreButton(false);
    } else {
      setCurrentList(movies.slice(0, currentList.length + cardCounterMore));
    }
  }

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      if (checkOwner.length > cardCounter) {
        setShowMoreButton(true);
      } else {
        setShowMoreButton(false);
      }
    } else {
      setShowMoreButton(currentList.length > cardCounter ? true : false);
    }
  }, []);

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setMoviesList(checkOwner);
    } else {
      setMoviesList(movies);
    }
  }, [cardCounter]);

  return (
    <>
      <ul className="movies-list">
        {currentList.length === 0 ? (
          <p className="movies-error">Фильмы не найдены</p>
        ) : location.pathname === "/movies" ? (
          currentList.map((movie) => {
            let isSaved = false;
            const isMovieSaved = savedMovies.filter((card) => {
              if (card.nameRU === movie.nameRU) {
                return card;
              }
            });
            if (isMovieSaved.length > 0) {
              isSaved = true;
            }

            return (
              <MoviesCard
                key={movie.movieId}
                isSaved={isSaved}
                savedMovies={savedMovies}
                checkMovies={checkMovies}
                movie={movie}
                changePreloaderStatus={changePreloaderStatus}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
              />
            );
          })
        ) : currentList.length > 0 ? (
          currentList.map((movie) => {
            return (
              <MoviesCard
                key={movie.movieId}
                savedMovies={savedMovies}
                checkMovies={checkMovies}
                movie={movie}
                changePreloaderStatus={changePreloaderStatus}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
              />
            );
          })
        ) : (
          <p className="movies-error">Сохраненных фильмов нет</p>
        )}
      </ul>
      {showMoreButton && (
        <button
          className="movies__more-button"
          type="button"
          aria-label="Открыть больше фильмов"
          onClick={location.pathname === "/movies" ? ()=>handleMoreMovies(movies) : ()=>handleMoreMovies(checkOwner)}
        >
          Еще
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
