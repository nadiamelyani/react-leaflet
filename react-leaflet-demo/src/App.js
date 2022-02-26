import './App.css';
import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import kecamatan from './data/kecamatan.json';
import parkData from "./data/park.json";
import { Icon } from "leaflet";

function App() {
  return (
    <MapContainer center={[-6.93,107.60]} zoom={12}scrollWheelZoom={true}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    {kecamatan.map(point => (
        <Marker
          key={kecamatan.nama}
          position={[
            point.koordinat[0],
            point.koordinat[1]
          ]}
          // onClick={() => {
          //   setActivePark(park);
          // }}
        />
      ))}
    </MapContainer>
  );
}



export default App;
