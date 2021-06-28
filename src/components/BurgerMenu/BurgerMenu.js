import React from "react";
import "./BurgerMenu.css";
import Navigation from "../Navigation/Navigation";

function BurgerMenu({loggedIn, burgerMenu, closeBurgerMenu}) {
  return (
    <aside className={burgerMenu ? "menu menu_opened" : "menu"}>
      <div className="menu__wrapper">
        <button className="menu__close-button" type="button" aria-label="Закрыть меню" onClick={closeBurgerMenu}/>
        <Navigation loggedIn={false} burgerMenu={burgerMenu} />
      </div>
    </aside>
  );
}

export default BurgerMenu;
