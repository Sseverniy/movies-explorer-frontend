import React from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
// import { getAllMovies } from "../../utils/MoviesApi";

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
  const [currentList, setCurrentList] = React.useState(movies);
  // const [showMoreButton, setShowMoreButton] = React.useState(false);

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
      const chosenMovies = searchMoviesByKeywords(movies, keywords, duration);
      if (chosenMovies.length > 0) {
        setMoviesList(chosenMovies);
        localStorage.setItem(
          "movies",
          JSON.stringify(chosenMovies)
        );
        setTimeout(()=>{
          setLoading(false);
        }, 400)
      } else {
        setMoviesList(movies);
        setError("Ничего не найдено");
        setTimeout(()=>{
          setLoading(false);
        }, 400)
      }
    }
  }

  function changePreloaderStatus(status) {
    setLoading(status);
  }

  React.useEffect(()=>{
    setLoading(true);
    checkMovies();
    setTimeout(()=>{
      setLoading(false);
    }, 400)
  },[]);

  return (
    <>
      <section className="movies">
        <SearchForm setAllMovies={setAllMovies} />
        
        {loading ? (
          <Preloader />
        ) : ( error ? <p className="movies__err">{error}</p> :
          <MoviesCardList
            movies={moviesList}
            savedMovies={savedMovies}
            checkMovies={checkMovies}
            changePreloaderStatus={changePreloaderStatus}
            cardCounter={cardCounter}
            cardCounterMore={cardCounterMore}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            currentList={currentList}
            setCurrentList={setCurrentList}
            // setShowMoreButton={setShowMoreButton}
            // showMoreButton={showMoreButton}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
