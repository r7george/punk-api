import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";
import "./Navbar.scss";

const Navbar = ({searchTerm, handleInput, handleChange}) => {

  return (
    <div className="navbar">
      <h2 className="navbar__heading">Search & Filter</h2>
      <SearchBox placeholder="Search by Name" searchTerm={searchTerm} handleInput={handleInput}/>
      <FiltersList onChange={handleChange}  />
      <p className="navbar__text">see more info by clicking the card</p>
    </div>
  )
}

export default Navbar;