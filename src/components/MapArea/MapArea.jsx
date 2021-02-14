import React, { useEffect, useContext } from 'react'
import Map from './Map';
import './MapArea.scss';
import { SearchContext } from '../../SearchContext';

function MapArea() {
  const [search, setSearch] = useContext(SearchContext);

  return (
    <div id='map-area'>
      <Map
        lat={search.lat}
        lon={search.lon}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHVZ9nW2yuI9R-4Ysj7KpyShybgiemu2c&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default MapArea
