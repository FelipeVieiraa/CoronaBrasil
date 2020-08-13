import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default function LeaftMap(props) {
  const [ lat, setLat ] = useState(-10.3333333);
  const [ lng, setLng ] = useState(-53.2);
  const [ zoom, setZoom ] = useState(0);

  const position = [lat, lng];

  return(
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}