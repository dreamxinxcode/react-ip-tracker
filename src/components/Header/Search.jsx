import React, { useContext } from 'react'
import { SearchContext } from '../../SearchContext';
import './Search.scss';
import axios from 'axios';

function Search() {
  const [search, setSearch] = useContext(SearchContext);

  const handleChange = (event) => {
    const query = event.target.value;
    setSearch(prev => ({...prev, query }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://ip-api.com/json/${search.query}`)
    .then(res => setSearch(prev => ({...prev, ip: res.data.query, city: res.data.city, country: res.data.country, timezone: res.data.timezone, isp: res.data.isp, lat: res.data.lat, lon: res.data.lon, region: res.data.region})))
    .catch(err => console.log(err));
  }

  return (
    <div id='search'>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder='Search for any IP address or domain' />
        <button type="submit">></button>
      </form>
    </div>
  )
}

export default Search
