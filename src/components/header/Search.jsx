import React from 'react'
import './Search.scss';

function Search() {
  return (
    <form action="POST" id='search'>
      <input type="text" placeholder='Search for any IP address or domain' />
      <input type="submit"/>
    </form>
  )
}

export default Search
