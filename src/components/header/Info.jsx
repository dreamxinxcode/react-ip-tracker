import React, { useContext } from 'react'
import './Info.scss';
import { SearchContext } from '../../SearchContext';

function Info() {
  const [search] = useContext(SearchContext);

  return (
    <div id='info'>
      <div id="ip">
        <h3>IP ADDRESS</h3>
        <span>{search.ip}</span> 
      </div>

      <div id="location">
        <h3>LOCATION</h3>
        <span>{search.city}</span>
        <span>{search.regionName}</span>
        <span>{search.country}</span>      
      </div>

      <div id="timezone">
        <h3>TIMEZONE</h3>
        <span></span>
      </div>

      <div id="isp">
        <h3>ISP</h3>
        <span>{search.isp}</span>
      </div>
    </div>
  )
}

export default Info
