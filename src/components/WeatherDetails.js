import React from "react";

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return null;

  // Extract relevant information from weatherData (replace with actual fields)
  const forecast = weatherData.items[0].forecasts;

  return (
    <ul>
      {forecast.map((location) => (
        <li key={location.area}>
          {location.area} Forecast: {location.forecast}
        </li>
      ))}
    </ul>
  );
};

export default WeatherDetails;
