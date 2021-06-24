import React from 'react';
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input className="search__input" placeholder="Фильм" type="text"></input>
        <button className="search__button" type="submit" aria-label="Начать поиск"/>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
