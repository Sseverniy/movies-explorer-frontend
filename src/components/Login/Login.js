import React from 'react';
import "./Login.css";
import SignHeader from "../SignHeader/SignHeader";
import * as MainApi from "../../utils/MainApi";
import { useFormHook } from "../../utils/useFormHook";
import {Link, useHistory} from "react-router-dom";

function Login({onLogin}) {
  const history = useHistory();
  const { values, handleChange, errors, isValid } = useFormHook();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }
  return (
    <div className="login-container">
      <SignHeader 
        headerText="Рады видеть!"
      />
      <form className="login-form" noValidate>
        <label htmlFor="user-email" className={`login-form__label ${errors.email ? 'login-form__label_error': ''}`}>E-mail
          <input onChange={handleChange} value={values.email || ''} name='email' id="user-email" className="login-form__input" type="email" required></input>
        </label>
        <span className="error">{errors.email || ''}</span>
        <label htmlFor="user-password" className={`login-form__label ${errors.password ? 'login-form__label_error': ''}`}>Пароль
          <input onChange={handleChange} value={values.password || ''} name='password' id="user-password" className="login-form__input" type="password" minLength="6" required></input>
        </label>
        <span className="error">{errors.password || ''}</span>
      </form>
      <button disabled={!isValid} className={`login__submit-button ${!isValid ? 'login__submit-button_invalid' :''}`} type="submit" aria-label="Подтвердить вход" onClick={handleSubmit}>Войти</button>
      <div className="login__wrapper">
        <span className="login__paragraph">Еще не зарегистрированы? </span>
        <Link to="/signup" className="login__signin-link">Регистрация</Link>
      </div>
    </div>
  );
}

export default Login;