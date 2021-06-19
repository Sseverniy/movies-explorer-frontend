import './Header.css';
import logo from '../../images/logo.svg'
// import { Redirect } from 'react-router-dom';

function Header() {
  // function redirectHeader() {
  //   return console.log(';adsd');
  // }

  return (
    <header className="header">
      <img className="header__logo" alt="Логотип сайта" src={logo} 
      // onClick={()=> redirectHeader()} 
      />
      <div className="header__wrapper">
        <button className="header__register-button button">Регистрация</button>
        <button className="header__login-button button">Войти</button>
      </div>
    </header>
  );
}

export default Header;