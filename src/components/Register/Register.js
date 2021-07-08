import React from 'react';
import "./Register.css";
import SignHeader from "../SignHeader/SignHeader";
import Preloader from "../Preloader/Preloader";
import { useFormHook } from "../../utils/useFormHook";
import {Link} from "react-router-dom";

function Register({onRegister, preloader}) {
  const { values, handleChange, errors, isValid } = useFormHook();

  // const [registerSuccess, setRegisterSuccess] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <div className="sign-container">
      <SignHeader 
        headerText="Добро пожаловать!"
      />
      {!preloader ?
      <>
      <form className="sign-form" noValidate>
        <label htmlFor="user-name" className={`sign-form__label ${errors.name ? 'sign-form__label_error' :''}`}>Имя
          <input onChange={handleChange} value={values.name || ''} name="name" id="user-name" className="sign-form__input" type="text" minLength="2" maxLength="40" required></input>
        </label>
        <span className="error">{errors.name || ''}</span>
        <label htmlFor="user-email" className={`sign-form__label ${errors.name ? 'sign-form__label_error' :''}`}>E-mail
          <input onChange={handleChange} value={values.email || ''} name="email" id="user-email" className="sign-form__input" type="email" required></input>
        </label>
        <span className="error">{errors.email || ''}</span>
        <label htmlFor="user-password" className={`sign-form__label ${errors.name ? 'sign-form__label_error' :''}`}>Пароль
          <input onChange={handleChange} value={values.password || ''} name="password" id="user-password" className="sign-form__input" type="password" minLength="6" required></input>
        </label>
        <span className="error">{errors.password || ''}</span>
      </form>
      <button onClick={handleSubmit} className={`sign__submit-button ${!isValid ? 'sign__submit-button_invalid' :''}`} type="submit" aria-label="Подтвердить регистрацию" disabled={!isValid}>Зарегистрироваться</button>
      <div className="sign__wrapper">
        <span className="sign__paragraph">Уже зарегистрированы? </span>
        <Link to="/signin" className="sign__signin-link">Войти</Link>
      </div> 
      </> : <Preloader/>}
    </div>
  );
}

export default Register;