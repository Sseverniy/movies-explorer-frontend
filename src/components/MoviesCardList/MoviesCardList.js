import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/UserContext";
import useViewport from '../../utils/useViewport';

function MoviesCardList({movies, checkMovies, savedMovies, changePreloaderStatus, cardCounter, cardCounterMore, saveMovie, deleteMovie}) {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();

  // const {width} = useViewport();
  // const [cardCounter, setCardCounter] = React.useState(0);
  // const [cardCounterMore, setCardCounterMore] = React.useState(0);
  const [currentList, setCurrentList] = React.useState(movies);
  const [showMoreButton, setShowMoreButton] = React.useState(false);


  // function checkWidth() {
  //   if (width > 995) {
  //     setCardCounter(12);
  //     setCardCounterMore(3);
  //     setMoviesList();
  //   } else if(width > 480) {
  //     setCardCounter(8);
  //     setCardCounterMore(2);
  //     setMoviesList();
  //   } else {
  //     setCardCounter(5);
  //     setCardCounterMore(2);
  //     setMoviesList();
  //   }
  // }
  function setMoviesList() {
    const newList = movies.slice(0,cardCounter);
    if (newList.length === 0 ) {
      setCurrentList(movies);
    } else {
      setCurrentList(newList);
    }
  }

  function handleMoreMovies() {
    setCurrentList(movies.slice(0, currentList.length + cardCounterMore));
  };

  // React.useEffect(()=>{
  //   checkWidth();
  // }, []);

  // React.useEffect(()=>{
  //   debugger
  //   if (currentList.length> 3) {
  //     setShowMoreButton(true);
  //   } else {
  //     setShowMoreButton(false);
  //   }
  // }, [currentList, location.pathname]);
  React.useEffect(()=>{
    if(location.pathname === "/saved-movies") {
      if (savedMovies.length > 3) {
        setShowMoreButton(true);
      } else {
        setShowMoreButton(false);
      }
    } else {
      setShowMoreButton(currentList.length >3 ? true : false);
    }
  }, [currentList, location.pathname]);

  React.useEffect(()=>{
    setMoviesList();
  }, [cardCounter]);

  const checkOwner = savedMovies.filter((card)=>{
      if (currentUser._id === card.owner) {
        return card
      } 
    });

  return (
    <>
      <ul className="movies-list">
        {currentList.length === 0 ? <p>Фильмы не найдены</p> :
        location.pathname === "/movies" ? 
          currentList.map((movie)=>{
            let isSaved = false;
            const isMovieSaved = savedMovies.filter((card) => {if (card.nameRU === movie.nameRU) {return card} })
            if (isMovieSaved.length > 0) {
              isSaved = true;
            }

            return <MoviesCard key={movie.movieId} isSaved={isSaved} savedMovies={savedMovies} checkMovies={checkMovies} movie={movie} changePreloaderStatus={changePreloaderStatus} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
          }) : 
          checkOwner.length >0 ?
            checkOwner.map((movie)=> {
              return <MoviesCard key={movie.movieId}  savedMovies={savedMovies} checkMovies={checkMovies} movie={movie} changePreloaderStatus={changePreloaderStatus} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
            }) : 
         <p>Сохраненных фильмов нет</p>
          
        }
      </ul>
      {showMoreButton && <button className="movies__more-button" type="button" aria-label="Открыть больше фильмов" onClick={handleMoreMovies}>Еще</button>}
    </>
  );
}

export default MoviesCardList;