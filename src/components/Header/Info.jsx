import React, { useContext, useEffect } from 'react'
import './Info.scss';
import { SearchContext } from '../../SearchContext';
import axios from 'axios';

function Info() {
  const [search, setSearch] = useContext(SearchContext);

  useEffect(() => {
    axios.get('http://ip-api.com/json/')
    .then(res => setSearch(prev => ({...prev, ip: res.data.query, city: res.data.city, country: res.data.country, timezone: res.data.timezone, isp: res.data.isp, lat: res.data.lat, lon: res.data.lon, region: res.data.region})))
    .catch(err => console.log(err));
  }, []);
  
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
        <span>{search.timezone}</span>
      </div>

      <div id="isp">
        <h3>ISP</h3>
        <span>{search.isp}</span>
      </div>
    </div>
  )
}

export default Info
