import React from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { getAllMovies } from "../../utils/MoviesApi";

function Movies({
  movies,
  checkMovies,
  savedMovies,
  cardCounter,
  cardCounterMore,
  saveMovie,
  deleteMovie,
}) {
  const [loading, setLoading] = React.useState(false);
  const [moviesList, setMoviesList] = React.useState(movies);
  const [error, setError] = React.useState("");

  function searchMoviesByKeywords(movies, keywords, duration) {
    return Array.from(movies).filter((movie) => {
      return Array.from(keywords).some(
        (keyword) =>
          movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
          (duration ? movie.duration <= 40 : true)
      );
    });
  }

  function setAllMovies(keywords, duration) {
    if (keywords.length === 0) {
      setError("Введите ключевое слово");
      setMoviesList(movies);
      localStorage.removeItem("movies");
    } else {
      setError("");
      setLoading(true);
      getAllMovies()
        .then((res) => {
          const chosenMovies = searchMoviesByKeywords(res, keywords, duration);
          if (chosenMovies.length > 0) {
            setMoviesList(
              chosenMovies.map((card) => ({
                country: card.country,
                movieId: card.id,
                director: card.director,
                duration: card.duration,
                year: card.year,
                description: card.description,
                image: `https://api.nomoreparties.co${card.image.url}`,
                trailer: card.trailerLink,
                thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
                nameRU: card.nameRU,
                nameEN: card.nameEN,
              }))
            );
            localStorage.setItem(
              "movies",
              JSON.stringify(
                chosenMovies.map((card) => ({
                  country: card.country,
                  movieId: card.id,
                  director: card.director,
                  duration: card.duration,
                  year: card.year,
                  description: card.description,
                  image: `https://api.nomoreparties.co${card.image.url}`,
                  trailer: card.trailerLink,
                  thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
                  nameRU: card.nameRU,
                  nameEN: card.nameEN,
                }))
              )
            );
          } else {
            setMoviesList(movies);
            setError("Ничего не найдено");
          }
        })
        .catch(() => {
          setError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function changePreloaderStatus(status) {
    setLoading(status);
  }

  return (
    <>
      <section className="movies">
        <SearchForm setAllMovies={setAllMovies} />
        {error && <p className="movies__err">{error}</p>}
        {loading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={moviesList}
            savedMovies={savedMovies}
            checkMovies={checkMovies}
            changePreloaderStatus={changePreloaderStatus}
            cardCounter={cardCounter}
            cardCounterMore={cardCounterMore}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
