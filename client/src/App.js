import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
const TOKEN =
  "pk.eyJ1IjoibWFyY2Vsb3RyYWphbm8iLCJhIjoiY2tmem05cHpwMXlsbTJ6cDlnaWY5dzR2bSJ9.7F7O_Onlh5gVxa8vz2FIuA";

function App() {
  const [locations, setLocations] = useState([]);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8787/api/logs");
      const data = await res.json();

      setLocations(data);
    })();
  }, []);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/marcelotrajano/ckfzol8hj1h3y19nznrlp55z3"
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        latitude={latitude}
        longitude={longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div className="marker">You are here</div>
      </Marker>
    </ReactMapGL>
  );
}

export default App;
