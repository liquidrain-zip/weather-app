import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import axios from "axios";

import LocationList from "./components/LocationList";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherArea, setWeatherArea] = useState(null);

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
        setWeatherData(data);
        setLocations(data.area_metadata);
        // TODO: toast success here
      })
      .catch(function (error) {
        console.error(error);
        // TODO: toast error here
      });
  };

  const handleSelectedLocation = (location) => {
    const weaArea = weatherData.items[0].forecasts.filter(
      (wea) => wea["area"].toLowerCase() === location.name.toLowerCase()
    )[0];
    setWeatherArea(weaArea);
  };

  return (
    <Container fluid className="d-flex flex-column">
      <Row className="flex-grow-1">
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Singapore 2-Hour Weather Forecast</Navbar.Brand>
          </Container>
        </Navbar>
        {weatherArea && (
          <Col className="overflow-auto mh-100vh" md={5}>
            <WeatherDetails weatherArea={weatherArea} />
          </Col>
        )}
        <Col className="overflow-auto mh-100vh">
          <LocationList
            locations={locations}
            setSelectedLocation={handleSelectedLocation}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
