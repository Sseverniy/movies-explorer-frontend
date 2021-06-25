import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import {useLocation, Link} from "react-router-dom";

function Header({loggedIn}) {
  const location = useLocation();

  return (
    (location.pathname === "/signin" || location.pathname === "/signout" || location.pathname === "/notFound") ?
    '' :
    <header className="header">
      <Link exact to="/" className="header__logo"/>
      <Navigation loggedIn={loggedIn}/>
    </header>
  );
}

export default Header;