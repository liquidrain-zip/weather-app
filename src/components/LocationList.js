import React, { useEffect, useState } from "react";
import { Card, ListGroup, FloatingLabel, Form } from "react-bootstrap";

const LocationList = ({ locations, setSelectedLocation }) => {
  const [locationsDisplayed, setLocationsDisplayed] = useState([]);

  useEffect(() => {
    setLocationsDisplayed(locations);
  }, [locations]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filteredLocations = locations.filter((loc) =>
      loc["name"].toLowerCase().includes(searchValue.toLowerCase())
    );
    setLocationsDisplayed(filteredLocations);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Card>
      <Card.Body className="pt-0">
        <div className="fixed-label-container">
          <FloatingLabel controlId="floatingInput" label="Search location">
            <Form.Control
              type="text"
              placeholder="ang mo kio"
              onChange={handleSearch}
            />
          </FloatingLabel>
        </div>
        {locationsDisplayed && (
          <ListGroup variant="flush" as="ol">
            {locationsDisplayed.map((location) => (
              <ListGroup.Item
                as="li"
                key={location.name}
                action
                onClick={() => selectLocation(location)}
              >
                {location.name} <br />
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
