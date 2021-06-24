import React from 'react';
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
