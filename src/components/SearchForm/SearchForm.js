import React from 'react';
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({setAllMovies}) {
  const [searchValue, setSearchValue] = React.useState('');
  const [duration, setDuration] = React.useState(false);

  function handleValueChange(e) {
    setSearchValue(e.target.value);
  }

  function getNeededMovies(e) {
    e.preventDefault();
    const keywords = searchValue ? searchValue.split(' ') : []
    if (keywords.length === 0) {
      setAllMovies([], false, "")
    }
    else {
      setAllMovies(keywords, duration);
    }
  }
  // function toggleDuration() {
  //   setDuration(!duration);
  // }

  function handleShortMovies() {
    const keywords = searchValue ? searchValue.split(' ') : []
    if (keywords.length === 0) {
      setAllMovies([], false, "")
    } else {
      setAllMovies(keywords, !duration);
      setDuration(!duration);
    }
  }

  return (
    <div className="search">
      <form className="search__form">
        <input onChange={handleValueChange} value={searchValue || ''} className="search__input" placeholder="Фильм" type="text" required></input>
        <button className="search__button" onClick={getNeededMovies} type="submit" aria-label="Начать поиск"/>
      </form>
      <FilterCheckbox handleShortMovies={handleShortMovies}/>
    </div>
  );
}

export default SearchForm;
