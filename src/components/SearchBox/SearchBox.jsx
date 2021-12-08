import React from 'react'
import "./SearchBox.scss";

const SearchBox = ({placeholder, searchTerm, handleInput}) => {
  
  return (
    <form className="searchbox">
      <input type="text" className="searchbox__input" value={searchTerm} onInput={handleInput} placeholder={placeholder}/>
    </form>
  )
}

export default SearchBox;
