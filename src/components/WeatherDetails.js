import React from "react";
import { Card } from "react-bootstrap";

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return null;

  // Extract relevant information from weatherData
  const forecast = weatherData.items[0].forecasts;

  return (
    <Card>
      <Card.Body>
        <ul>
          {forecast.map((location) => (
            <li key={location.area}>
              {location.area} Forecast: {location.forecast}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default WeatherDetails;
