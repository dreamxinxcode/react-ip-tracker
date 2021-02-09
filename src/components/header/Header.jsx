import React from 'react'
import './Header.scss';
import Search from "./Search";
import Info from './Info';

function Header() {
  return (
    <header>
      <h2 id='title'>IP Address Tracker</h2>
      <Search />
      <Info />
    </header>
  )
}

export default Header
