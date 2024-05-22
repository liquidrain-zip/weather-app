import React, { useState } from "react";
import { Card, ListGroup, FloatingLabel, Form } from "react-bootstrap";

const LocationList = ({ locations, setSelectedLocation }) => {
  const [locationsDisplayed, setLocationsDisplayed] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filteredLocations = locations.filter((loc) =>
      loc["name"].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLocationsDisplayed(filteredLocations);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Card>
      <Card.Body>
        <div className="fixed-label-container">
          <FloatingLabel controlId="floatingInput" label="Search location">
            <Form.Control
              type="text"
              placeholder="ang mo kio"
              onChange={handleSearch}
              value={searchValue}
            />
          </FloatingLabel>
        </div>
        {locationsDisplayed && searchValue && (
          <ListGroup
            variant="flush"
            as="ol"
            className="overflow-auto mh-100vh location-list"
          >
            {locationsDisplayed.map((location) => (
              <ListGroup.Item
                as="li"
                key={location.name}
                action
                onClick={() => selectLocation(location)}
                className="list-item"
              >
                <b>{location.name}</b> <br />
                Latitude: {location.label_location.latitude} <br />
                Longitude: {location.label_location.longitude}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default LocationList;
