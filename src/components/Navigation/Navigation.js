import React from "react";
import "./Navigation.css";
import {Link, Redirect, useLocation, NavItem} from "react-router-dom";
import profileLogo from "../../images/profile-logo.svg"

function Navigation({loggedIn}) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    loggedIn ? (
    <div className="navigate__wrapper">
      <button className="navigate__register-button button">Регистрация</button>
      <button className="navigate__login-button button">Войти</button>
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