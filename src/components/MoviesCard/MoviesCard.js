import React from 'react';
import "./MoviesCard.css";
import {useLocation} from "react-router-dom";
import * as MainApi from "../../utils/MainApi";

function MoviesCard({isSaved, savedMovies, movie, checkMovies, changePreloaderStatus, saveMovie, deleteMovie}) {
  const location = useLocation();
  // const imgUrl = `https://api.nomoreparties.co${movie.image}`;
  // const thumbnail = `https://api.nomoreparties.co${movie.thumbnail}`;
  const movieDuration = new Date(1000 * movie.duration).toISOString().substr(11, 8).replace(/^[0:]+/, "");

  const [isMovieSaved, setIsMovieSaved] = React.useState(isSaved? true : false);

  const [newMovieId, setNewMovieId] = React.useState();

  function handleSaveStatus(movie, savedMovies) {
    if (!isMovieSaved || !isSaved) {
      handleSaveMovie(movie);
    } else {
      setMovieId();
    }

  }

  function handleSaveMovie(movie) {
    const jwt = localStorage.getItem("jwt");
    changePreloaderStatus(true);
    saveMovie(jwt, movie)
    .then((res)=>{
      if (res.statusCode !== 400) {
        checkMovies();
        setIsMovieSaved(true);
        console.log("Вы успешно сохранили фильм");
      } else {
        setIsMovieSaved(false);
      }
    })
    .catch((err)=>console.log(err))
    .finally(()=>{changePreloaderStatus(false)});
  }

  function setMovieId() {
    changePreloaderStatus(true);
    const movieID = savedMovies.find((item)=> {
      debugger
      if (item.movieId === movie.movieId) {
       return item._id;
      } else {
        return '';
      }

    })
    handleDeleteMovie(movieID)
  }

  function changeSavedStatus(status) {
    setIsMovieSaved(status);
  }

  function handleDeleteMovie(movieID) {
    const jwt = localStorage.getItem("jwt");
    changePreloaderStatus(true);
    console.log(movie);
    deleteMovie(jwt, movieID._id)
    .then((res)=>{
      if (res.statusCode !== 400) {
        checkMovies();
        changeSavedStatus(false);
        console.log("Вы успешно удалили фильм");
      } else {
        changeSavedStatus(true);
      }
    })
    .catch((err)=>console.log(err))
    .finally(()=>changePreloaderStatus(false))
  }

  // function checkSavedMovies(){
  //   checkMovies();
  // };

  // React.useEffect(()=>{
  //   checkSavedMovies();
  // }, [])


  return (
    location.pathname === "/saved-movies" ?
    <li className="movie">
      <a href={movie.trailer} target="_blank" rel="noreferrer"><img className="movie__preview" alt="Превью фильма" src={movie.image}></img></a>
      <div className="movie__wrapper">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button className="movie__delete-button" type="button" aria-label="Удалить фильм" onClick={()=>setMovieId()}/>
      </div>
      <p className="movie__duration">{movieDuration}</p>
    </li>
    :
    <li className="movie">
    <a href={movie.trailer} target="_blank" rel="noreferrer"><img className="movie__preview" alt="Превью фильма" src={movie.image}></img></a>
    <div className="movie__wrapper">
      <h2 className="movie__title">{movie.nameRU}</h2>
      <button className={isMovieSaved  ? "movie__save-button movie__save-button_active" : "movie__save-button" } type="button" aria-label="Сохранить фильм" onClick={()=>handleSaveStatus(movie,savedMovies)}/>
    </div>
    <p className="movie__duration">{movieDuration}</p>
  </li>
  )
}

export default MoviesCard;