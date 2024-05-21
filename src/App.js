import React, { useState, useEffect, useRef } from "react";
import LocationList from "./components/LocationList";
import WeatherDetails from "./components/WeatherDetails";
import axios from "axios";

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
    // const date = new Date();
    // // Format the date in YYYY-MM-DD format
    // const year = date.getFullYear().toString().padStart(4, "0");
    // const month = (date.getMonth() + 1).toString().padStart(2, "0");
    // const day = date.getDate().toString().padStart(2, "0");
    // const formattedDate = `${year}-${month}-${day}`;

    // // Get hours, minutes, and seconds with padding
    // const hours = date.getHours().toString().padStart(2, "0");
    // const minutes = date.getMinutes().toString().padStart(2, "0");
    // const seconds = date.getSeconds().toString().padStart(2, "0");

    // // Combine formatted date, time separator 'T', and time
    // const formattedDateTime = `${formattedDate}[T]${hours}:${minutes}:${seconds}`;

    // // Add SGT
    // const sgtDateTime = `${formattedDateTime}(SGT)`;

    axios
      .get(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`)
      .then(function ({ data }) {
        // handle success
        console.log(data);
        setWeatherData(data);
        setLocations(data.area_metadata);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div className="App">
      <h1>Singapore 2-Hour Weather Forecast</h1>
      <LocationList locations={locations} />
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
}

export default App;
