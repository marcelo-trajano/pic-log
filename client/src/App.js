import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getLocations } from "./api/Api";
import Location from "./components/Location";
import MapPin from "./assets/map-pin.svg";
const MAPBOX_API_ACCESS_TOKEN =
  "pk.eyJ1IjoibWFyY2Vsb3RyYWphbm8iLCJhIjoiY2tmem05cHpwMXlsbTJ6cDlnaWY5dzR2bSJ9.7F7O_Onlh5gVxa8vz2FIuA";

function App() {
  const [locations, setLocations] = useState([]);

  const [showPopup, setShowPopup] = useState(true);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

  useEffect(() => {
    (async () => {
      const data = await getLocations();
      setLocations(data);
    })();
  }, []);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/marcelotrajano/ckfzol8hj1h3y19nznrlp55z3"
      mapboxApiAccessToken={MAPBOX_API_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {locations.map((location) => (
        <Marker
          key={location._id}
          latitude={location.latitude}
          longitude={location.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <svg
            viewBox="0 0 24 24"
            width="35"
            height="35"
            stroke="#F96150"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
      ))}
    </ReactMapGL>
  );
}

export default App;
