import React from 'react';
import './Searchbar.css';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [keyword,setKeyword]= React.useState('')
  const history= useHistory();
  const handleSubmit = () => {
    history.push(`/search?query=${keyword}`);
  }
  let disabledButton = true;
  if (keyword === '') {
    disabledButton=true
  } else {
    disabledButton=false
  }
  return (
    <section className="searchbar-container">
      <div className="searchbar-position">
        <input 
        key="random1"
        value={keyword}
        placeholder={"  search for a dish"}
        onChange={(e) => {
          setKeyword(e.target.value) 
        }}
        />
        <button disabled={disabledButton}
        className='searchButton' 
        onClick = {handleSubmit}>  Buscar  </button>
      </div>
    </section>
  );
}
export default SearchBar;
