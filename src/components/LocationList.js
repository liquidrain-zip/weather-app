import React from "react";

const LocationList = ({ locations }) => {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.name}>
          {location.name} Latitude: {location.label_location.latitude}{" "}
          Longitude: {location.label_location.longitude}
        </li>
      ))}
    </ul>
  );
};

export default LocationList;
