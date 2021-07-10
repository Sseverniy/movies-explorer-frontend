import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {CurrentUserContext} from "../../contexts/UserContext"

function MoviesCardList({
  movies,
  checkMovies,
  savedMovies,
  changePreloaderStatus,
  cardCounter,
  cardCounterMore,
  saveMovie,
  deleteMovie,
  // checkOwner,
  currentList,
  setCurrentList,
  // showMoreButton, 
  // setShowMoreButton,
  savedMoviesList
}) {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const [showMoreButton, setShowMoreButton] = React.useState(false);

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
      setShowMoreButton(true);
    }
  }

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      if (savedMoviesList.length > cardCounter) {
        setShowMoreButton(true);
      } else {
        setShowMoreButton(false);
      }
    } else {
      setShowMoreButton(movies.length > cardCounter ? true : false);
    }
  }, [cardCounter]);

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setMoviesList(savedMoviesList);
      console.log(savedMoviesList)
    } else {
      setMoviesList(movies);
    }
  }, []);

  return (
    <>
      <ul className="movies-list">
        {/* {currentList.length === 0 || savedMoviesList.length === 0 ? (
          <p className="movies-error">Фильмы не найдены</p> */}
        {/* ) :  */}
        {location.pathname === "/movies" ? (
          currentList.map((movie) => {
            let isSaved = false;
            const isMovieSaved = savedMovies.filter((card) => {
              if (card.nameRU === movie.nameRU && card.owner === currentUser._id) {
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
            if (movie.owner === currentUser._id) {
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
            }
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
          onClick={location.pathname === "/movies" ? ()=>handleMoreMovies(movies) : ()=>handleMoreMovies(savedMovies)}
        >
          Еще
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
