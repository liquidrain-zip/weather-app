import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import axios from "axios";

import LocationList from "./components/LocationList";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchData();
    }

    renderAfterCalled.current = true;
  }, []);

  const fetchData = async () => {
    axios
      .get(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`)
      .then(function ({ data }) {
        // handle success
        setWeatherData(data);
        setLocations(data.area_metadata);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  };

  return (
    <Container fluid className="d-flex flex-column">
      <Row className="flex-grow-1">
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Singapore 2-Hour Weather Forecast</Navbar.Brand>
          </Container>
        </Navbar>
        <Col className="overflow-auto mh-100vh">
          <WeatherDetails weatherData={weatherData} />
        </Col>
        <Col md={7} className="overflow-auto mh-100vh">
          <LocationList locations={locations} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
