import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import {useLocation, Link} from "react-router-dom";

function Header({loggedIn, openBurgerMenu, burgerMenu}) {
  const location = useLocation();

  return (
    (location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/not-found") ?
    '' : !loggedIn ?
    <header className="header">
      <Link to="/" className="header__logo" />
      <Navigation loggedIn={loggedIn} burgerMenu={burgerMenu}/>
    </header> :
    burgerMenu ?
    <header className="header">
      <Link to="/" className="header__logo" />
      <button className="header__burger-button" onClick={openBurgerMenu}/>
    </header> :
    <header className="header">
      <Link to="/" className="header__logo" />
      <button className="header__burger-button" onClick={openBurgerMenu}/>
      <Navigation loggedIn={loggedIn} burgerMenu={burgerMenu}/>
    </header>
  );
}

export default Header;