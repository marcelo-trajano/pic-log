import React from "react";
import "./styles.css";

export default ({ location }) => {
  return (
    <div className="marker">
      <div className="marker-title">{location.title}</div>
      <div className="marker-desc">{location.description}</div>
      <div className="marker-visitDate">Visited: {location.visitDate}</div>
      <div className="marker-Rating">Rating: {location.rating}</div>
      <div className="marker-img">
        <img src={location.image} />
      </div>
    </div>
  );
};
