import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { getLocations } from "./api/Api";
import Location from "./components/Location";

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
      const data = await getLocations();
      setLocations(data);
    })();
  }, []);

  console.log(process.env.MAPBOX_API_ACCESS_TOKEN);

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.MAPBOX_API_ACCESS_TOKEN}
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
          <Location location={location} />
        </Marker>
      ))}
    </ReactMapGL>
  );
}

export default App;
