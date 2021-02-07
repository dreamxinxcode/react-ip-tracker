import React from 'react'
import './Header.scss';
import Search from "./Search";
import Info from './Info';

function Header() {
  return (
    <header>
      <h1 id='title'>IP Address Tracker</h1>
      <Search />
      <Info />
    </header>
  )
}

export default Header
