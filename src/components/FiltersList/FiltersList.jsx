import React from 'react';
import "./FiltersList.scss";
import FilterItem from '../FilterItem/FilterItem';


const FiltersList = ({onChange}) => {
  return (
    <div className="filters-list">
      <FilterItem name="abv" label="ABV > 6%:" onChange={onChange} id="abv" />
      <FilterItem name="classic" label="Brewed before 2010:" onChange={onChange} id="classic" />
      <FilterItem name="acidity" label="pH lower than 4:" onChange={onChange} id="acidity"/>
    </div>
  )
}

export default FiltersList;
