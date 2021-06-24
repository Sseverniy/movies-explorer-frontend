import React from 'react';
import "./Register.css";
import SignHeader from "../SignHeader/SignHeader";
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className="sign-container">
      <SignHeader 
        headerText="Добро пожаловать!"
      />
      <form className="sign-form">
        <label for="user-name" className="sign-form__label">Имя
          <input id="user-name" className="sign-form__input" type="text"></input>
        </label>
        <label for="user-email" className="sign-form__label">E-mail
          <input id="user-email" className="sign-form__input" type="email"></input>
        </label>
        <label for="user-password" className="sign-form__label sign-form__error">Пароль
          <input id="user-password" className="sign-form__input sign-form__error" type="password"></input>
        </label>
        <span className="error">Что-то пошло не так...</span>
      </form>
      <button className="sign__submit-button" type="submit" aria-label="Подтвердить регистрацию">Зарегистрироваться</button>
      <div className="sign__wrapper">
        <span className="sign__paragraph">Уже зарегистрированы? </span>
        <Link to="/signin" className="sign__signin-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;