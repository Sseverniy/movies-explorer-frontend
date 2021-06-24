import React from 'react';
import "./Profile.css";
import {useHistory} from "react-router-dom";

function Profile({onExit}) {
  const history = useHistory();
  function logOut() {
    onExit();
    history.push("/");
  }
  return (
    <>
      <div className="profile">
        <h2 className="profile__heading">Привет, Виталий!</h2>
        <form className="profile__form">
          <label className="profile__label">Имя
            <input className="profile__input" name="user" type="text" minLength="2" maxLength="40" required value="Виталий"></input>
          </label>
          <label className="profile__label">E-mail
            <input className="profile__input" name="mail" type="mail" value="pochta@yandex.ru"></input>
          </label>
        </form>
        <button className="profile__edit-button " type="submit" aria-label="Редактировать профиль">Редактировать</button>
        <button className="profile__exit-button " type="button" aria-label="Выйти из аккаунта" onClick={logOut}>Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;
