import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Navbar.scss";

const Navbar = ({searchTerm, handleInput}) => {

  return (
    <div className="navbar">
      <h2 className="navbar__heading">Search & Filter</h2>
      <SearchBox placeholder="Search by Name" searchTerm={searchTerm} handleInput={handleInput}/>
    </div>
  )
}

export default Navbar;