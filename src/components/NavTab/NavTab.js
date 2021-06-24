import React from 'react';
import "./NavTab.css";

function NavTab() {
  return (
    <div className="nav-tab">
      <a className="nav-tab__link" href="#about">О проекте</a>
      <a className="nav-tab__link" href="#stack">Технологии</a>
      <a className="nav-tab__link" href="#student">Студент</a>
    </div>
  );
}

export default NavTab;
