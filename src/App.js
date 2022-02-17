import 'leaflet/dist/leaflet.css'
import React,{ useState } from 'react';

import { MapContainer } from "react-leaflet";

import Map from "./components/Map";
import Navigation from "./components/Navigation";
import Actions from "./components/Actions";


function App() {

  let [markerPos, setMarkerPos] = useState([[51.505, -0.09]]);

  let [page,setPage] = useState(0);

  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ "height": "calc(100vh - 65px)" }}>
        <Map markerPos={markerPos} />
        <Actions />
        <Navigation page={page} setPage={setPage} />
      </MapContainer>
    </>
  );
}

export default App;

