import React from 'react';
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  const [savedMovie, setSavedMovie] = React.useState(false);
  function saveMovie() {
    setSavedMovie(!savedMovie);
  }

  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList savedMovie={savedMovie} onSave={saveMovie}/>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
