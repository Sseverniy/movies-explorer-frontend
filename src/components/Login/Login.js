import React from 'react';
import "./Login.css";
import SignHeader from "../SignHeader/SignHeader";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="sign-container">
      <SignHeader 
        headerText="Рады видеть!"
      />
      <form className="sign-form">
        <label for="user-email" className="sign-form__label">E-mail
          <input id="user-email" className="sign-form__input" type="email"></input>
        </label>
        <label for="user-password" className="sign-form__label">Пароль
          <input id="user-password" className="sign-form__input" type="password"></input>
        </label>
      </form>
      <button className="sign__submit-button" type="submit" aria-label="Подтвердить вход">Войти</button>
      <div className="sign__wrapper">
        <span className="sign__paragraph">Еще не зарегистрированы? </span>
        <Link to="/signup" className="sign__signin-link">Регистрация</Link>
      </div>
    </div>
  );
}

export default Login;