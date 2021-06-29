import React from 'react';
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input type="checkbox" defaultCheck="checked" className="checkbox__invisible-part"></input>
      Короткометражки<span className="checkbox__visible-part"></span>
    </label>
  );
}

export default FilterCheckbox;
