import React from 'react';
import "./FilterCheckbox.css";

function FilterCheckbox({handleShortMovies}) {
  // const [isChecked, setIsChecked] = React.useState(duration ? "checked" : "");
  // function changeStatus() {
  //   if (isChecked === "checked") {
  //     setIsChecked(" ");
  //     toggleDuration();
  //   } else {
  //     setIsChecked("checked");
  //     toggleDuration();
  //   }
  // }
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__invisible-part" onChange={handleShortMovies}></input>
      Короткометражки<span className="checkbox__visible-part"></span>
    </label>
  );
}

export default FilterCheckbox;
