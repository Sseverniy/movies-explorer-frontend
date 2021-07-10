import React from "react";
import "./Navigation.css";
import {Link, useLocation} from "react-router-dom";
import profileLogo from "../../images/profile-logo.svg"

function Navigation({loggedIn, burgerMenu, closeBurgerMenu}) {
  const location = useLocation();
  return (
    location.pathname === "/" && !loggedIn ? (
    <div className="navigate__wrapper">
      <Link to="/signup" className="navigate__register-link link">Регистрация</Link>
      <Link to="/signin" className="navigate__login-link link">Войти</Link>
    </div>
    ) : location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/not-found' ? 
    '': burgerMenu ? 
    <>
      <div className="navigate__wrapper navigate__wrapper_burger">
        <Link to="/" className="navigate__link" >Главная</Link>
        <Link to="/movies" className="navigate__link">Фильмы</Link>
        <Link to="/saved-movies" className="navigate__link">Сохраненные фильмы</Link>
      </div>
      <div className="navigate__profile navigate__profile_burger">
        <Link to="/profile" className="navigate__profile-link">Аккаунт</Link>
        <Link to="/profile" className="navigate__profile-link">
        <img className="navigate__profile-logo" src={profileLogo} alt="Логотип профиля"/>
        </Link>
      </div>
    </> 
    : 
    <>
    <div className="navigate__wrapper navigate__wrapper_invisible">
      <Link to="/movies" className="navigate__link">Фильмы</Link>
      <Link to="/saved-movies" className="navigate__link">Сохраненные фильмы</Link>
    </div>
    <div className="navigate__profile navigate__profile_invisible">
      <Link to="/profile" className="navigate__profile-link">Аккаунт</Link>
      <Link to="/profile" className="navigate__profile-link">
      <img className="navigate__profile-logo" src={profileLogo} alt="Логотип профиля"/>
      </Link>
    </div>
    </>
  )
}

export default Navigation;