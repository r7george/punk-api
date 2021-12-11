import React from 'react';
import "./FilterItem.scss";

const FilterItem = ({name, onChange, label, id}) => {
  return (
    <form className="filter-item">
      <label htmlFor={name} className="filter-item__label">{label}</label>
      <input type="checkbox" name={name} onChange={onChange} id={id} />
    </form>
  )
}

export default FilterItem;
