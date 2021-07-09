import React from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { CurrentUserContext } from "../../contexts/UserContext";

function SavedMovies({
  savedMovies,
  checkMovies,
  cardCounter,
  cardCounterMore,
  movies,
  deleteMovie,
}) {
  const [loading, setLoading] = React.useState(false);
  const [savedMoviesList, setSavedMoviesList] = React.useState(savedMovies)
  const [error, setError] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  
  const [currentList, setCurrentList] = React.useState(savedMovies);
  const [showMoreButton, setShowMoreButton] = React.useState(false);

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
      setSavedMoviesList(savedMovies);
    } else {
      setError("");
      setLoading(true);
      const chosenMovies = searchMoviesByKeywords(savedMovies, keywords, duration);
      if (chosenMovies.length > 0) {
        setSavedMoviesList(chosenMovies);
        localStorage.setItem(
          "saved-movies",
          JSON.stringify(chosenMovies)
        );
      } else {
        setSavedMoviesList(savedMovies);
        setError("Ничего не найдено");
        debugger;
      }
      setLoading(false);
    }
  
  }

  function changePreloaderStatus(status) {
    setLoading(status);
  }

  const checkOwner = savedMoviesList.filter((card)=>{
    if (currentUser._id === card.owner) {
      return card
    } 
  });

  return (
    <>
      <section className="saved-movies">
        <SearchForm setAllMovies={setAllMovies}/>
        {loading ? (
          <Preloader />
        ) : ( error ? <p className="saved-movies__err">{error}</p> :
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            checkMovies={checkMovies}
            changePreloaderStatus={changePreloaderStatus}
            cardCounter={cardCounter}
            cardCounterMore={cardCounterMore}
            deleteMovie={deleteMovie}
            checkOwner={checkOwner}
            currentList={currentList}
            setCurrentList={setCurrentList}
            setShowMoreButton={setShowMoreButton}
            showMoreButton={showMoreButton}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
