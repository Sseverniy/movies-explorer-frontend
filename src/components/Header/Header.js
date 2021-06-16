import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип сайта" src={logo}></img>
      <div className="header__wrapper">
        <button className="header__register-button button">Регистрация</button>
        <button className="header__login-button button">Войти</button>
      </div>
    </header>
  );
}

export default Header;