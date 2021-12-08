import React from 'react';
import "./FiltersList.scss";
import FilterItem from '../FilterItem/FilterItem';


const FiltersList = ({onChange}) => {
  return (
    <div className="filters-list">
      <FilterItem name="test" label="test:" onChange={onChange} />
    </div>
  )
}

export default FiltersList;
