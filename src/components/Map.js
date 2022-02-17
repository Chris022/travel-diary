import React,{ useState } from 'react';

import { MapContainer, TileLayer, Popup, Marker, useMapEvents, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'



export default function Map({markerPos}) {

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPos.map((pos)=>
        <Marker position={pos} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} />
      )}
      
      

      </>
  )

}