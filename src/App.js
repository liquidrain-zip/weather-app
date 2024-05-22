import React, { useState, useEffect, useRef } from "react";
import { Container, Col, Navbar } from "react-bootstrap";
import axios from "axios";

import LocationList from "./components/LocationList";
import WeatherDetails from "./components/WeatherDetails";
import AlertDismissible from "./components/AlertDismissable";
import "./App.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherArea, setWeatherArea] = useState(null);
  const [currentdate, setCurrentdate] = useState(new Date().toLocaleString());
  const [error, setError] = useState(null);

  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchData(true); // fetch data, set initial data

      const timer = setInterval(() => {
        setCurrentdate(new Date().toLocaleString());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }

    renderAfterCalled.current = true;
  }, []);

  const fetchData = async (initialData) => {
    await axios
      .get(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`)
      .then(function ({ data }) {
        setWeatherData(data);
        setLocations(data.area_metadata);
        if (initialData) {
          setWeatherArea(data.items[0].forecasts[0]);
        }
      })
      .catch(function (error) {
        console.error(error);
        setError(error);
      });
  };

  const handleSelectedLocation = (location) => {
    const weaArea = weatherData.items[0].forecasts.filter(
      (wea) => wea["area"].toLowerCase() === location.name.toLowerCase()
    )[0];
    setWeatherArea(weaArea);
    fetchData(false); // updates data when user selects a location from list
  };

  return (
    <Container fluid className="d-flex flex-column px-0">
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Singapore 2-Hour Weather Forecast</Navbar.Brand>
          <Navbar.Text className="justify-content-end ">
            {currentdate}
          </Navbar.Text>
        </Container>
      </Navbar>
      <AlertDismissible error={error} />
      <Col className="weather-details">
        <WeatherDetails weatherArea={weatherArea} />
      </Col>
      <Col>
        <LocationList
          locations={locations}
          setSelectedLocation={handleSelectedLocation}
        />
      </Col>
    </Container>
  );
}

export default App;
