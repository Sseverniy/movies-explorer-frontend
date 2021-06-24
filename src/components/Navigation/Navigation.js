import React from "react";
import "./Navigation.css";
import {Link, useLocation} from "react-router-dom";
import profileLogo from "../../images/profile-logo.svg"

function Navigation({loggedIn}) {
  const location = useLocation();
  console.log(loggedIn);
  React.useEffect(()=> {

  },[loggedIn]);
  return (
    !loggedIn ? (
    <div className="navigate__wrapper">
      <Link to="/signup" className="navigate__register-link link">Регистрация</Link>
      <Link to="/signin" className="navigate__login-link link">Войти</Link>
    </div>
    ) : location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' ? 
    (
    <>
    <div className="navigate__wrapper">
      <Link to="/movies" className="navigate__link">Фильмы</Link>
      <Link to="/saved-movies" className="navigate__link">Сохраненные фильмы</Link>
    </div>
    <div className="navigate__profile">
      <Link to="/profile" className="navigate__profile-link">Аккаунт</Link>
      <Link to="/profile" className="navigate__profile-link">
      <img className="navigate__profile-logo" src={profileLogo} alt="Логотип профиля"/>
      </Link>
    </div>
    </>
    ): ''
  )
}

export default Navigation;