import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import {useLocation} from "react-router-dom";

function Header({loggedIn}) {
  const location = useLocation();

  return (
    (location.pathname === "/signin" || location.pathname === "/signout" || location.pathname === "/notFound") ?
    '' :
    <header className="header">
      <img className="header__logo" alt="Логотип сайта" src={logo}/>
      <Navigation loggedIn={loggedIn}/>
    </header>
  );
}

export default Header;