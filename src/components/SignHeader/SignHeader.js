import React from 'react';
import './SignHeader.css';
import logo from '../../images/logo.svg'

function SignHeader({headerText}) {
  return(
    <header className="sign-header">
      <img className="sign-header__logo" src={logo} alt="Логотип сайта" />
      <h1 className="sign-header__heading">{headerText}</h1>
    </header>
  )
}

export default SignHeader; 