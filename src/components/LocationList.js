import React from "react";
import { Card } from "react-bootstrap";

const LocationList = ({ locations }) => {
  return (
    <Card>
      <Card.Body>
        <ul>
          {locations.map((location) => (
            <li key={location.name}>
              {location.name} Latitude: {location.label_location.latitude}{" "}
              Longitude: {location.label_location.longitude}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default LocationList;
