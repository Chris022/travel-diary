import 'leaflet/dist/leaflet.css'
import React,{ useState } from 'react';

import { MapContainer } from "react-leaflet";

import Map from "./components/Map";
import Navigation from "./components/Navigation";
import Actions from "./components/Actions";
import NewTravelModal from "./components/NewTravelModal"


function App() {

  let [markerPos, setMarkerPos] = useState([[51.505, -0.09]]);

  let [page,setPage] = useState(0);

  let [newTravelModal,setNewTravelModal] = useState(false);

  let addTravel = () => {
    setNewTravelModal(true);
  }

  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ "height": "calc(100vh - 65px)" }}>
        <Map markerPos={markerPos} />
        <Actions addCountry={addTravel} />
        <Navigation page={page} setPage={setPage} />
        <NewTravelModal open={newTravelModal} setOpen={setNewTravelModal} />
      </MapContainer>
    </>
  );
}

export default App;

