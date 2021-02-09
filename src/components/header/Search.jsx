import React from 'react'
import './Search.scss';

function Search() {
  return (
    <form action="POST" id='search'>
      <input type="text" placeholder='Search for any IP address or domain' />
      <button type="submit"></button>
    </form>
  )
}

export default Search
