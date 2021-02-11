import React, { useContext } from 'react'
import { SearchContext } from '../../SearchContext';
import './Search.scss';
import  { searchContext } from '../../SearchContext';

function Search() {
  const [search, setSearch] = useContext(SearchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.value;
    setSearch(prev => ({...prev, query }));
    console.log(search);
  }

  return (
    <div id='search'>
      <input onChange={handleSubmit} type="text" placeholder='Search for any IP address or domain' />
      <button type="submit"></button>
    </div>
  )
}

export default Search
