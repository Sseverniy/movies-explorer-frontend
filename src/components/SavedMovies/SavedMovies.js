import React from 'react';
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({savedMovies, checkMovies, movies, deleteMovie}) {
  // const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   MainApi.getSavedMovies(localStorage.getItem("jwt"))
  //   .then((res) => {
  //     setSavedMoviesList(res)
  //     console.log("Список сохраненных фильмов успешно создан")
  //   })
  //   .cath(err=>console.log(err))
  // }, [])

  function changePreloaderStatus(status) {
    setLoading(status);
  }


  return (
    <>
      <section className="saved-movies">
        <SearchForm />
        {loading ? <Preloader /> : <MoviesCardList savedMovies={savedMovies} checkMovies={checkMovies} movies={movies} changePreloaderStatus={changePreloaderStatus} deleteMovie={deleteMovie}/>}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
