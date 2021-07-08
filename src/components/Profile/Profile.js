import React from 'react';
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/UserContext";
import { useFormHook } from "../../utils/useFormHook";
import Preloader from '../Preloader/Preloader';

function Profile({onExit, onUpdate, preloader}) {
  const history = useHistory();
  const currentUserData = React.useContext(CurrentUserContext);
  const {values, setValues, handleChange, errors, isValid} = useFormHook();

  function logOut() {
    onExit();
    history.push("/");
  }

  function handleSubmitForm(e){
    e.preventDefault();
    if (!(values.name === currentUserData.name && values.email === currentUserData.email)) {
      onUpdate({
        name: values.name,
        email: values.email,
      });
    }
  }

  React.useEffect(() => {
    setValues({
      name: currentUserData.name,
      email: currentUserData.email
    });
  },[currentUserData]);

  return (
    !preloader ?
    <div className="profile">
      <h2 className="profile__heading">{`Привет, ${currentUserData.name}!`}</h2>
      <form className="profile__form" noValidate>
        <label className="profile__label">Имя
          <input onChange={handleChange} name='name' value={values.name || ''} className="profile__input" type="text" minLength="2" maxLength="40" required></input>
        </label>
        <label className="profile__label">Почта
          <input onChange={handleChange} name='email' value={values.email || ''} className="profile__input" type="email" required></input>
        </label>
        <span className="error">{errors.name || ''}</span>
        <span className="error">{errors.email || ''}</span>
      </form>
      <button onClick={handleSubmitForm} className={`profile__edit-button ${isValid ? '' : 'profile__edit-button_invalid'}`} type="submit" aria-label="Редактировать профиль" disabled={!isValid}>Редактировать</button>
      <button className="profile__exit-button " type="button" aria-label="Выйти из аккаунта" onClick={logOut}>Выйти из аккаунта</button>
    </div> : <Preloader/>
  );
}

export default Profile;
