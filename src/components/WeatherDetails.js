import React from "react";
import { Card } from "react-bootstrap";

import ClearDay from "../weather-icons/clear-day.svg";
import ClearNight from "../weather-icons/clear-night.svg";
import Cloudy from "../weather-icons/cloudy.svg";
import Drizzle from "../weather-icons/drizzle.svg";
import FogDay from "../weather-icons/fog-day.svg";
import FogNight from "../weather-icons/fog-night.svg";
import Fog from "../weather-icons/fog.svg";
import Hail from "../weather-icons/hail.svg";
import HazeDay from "../weather-icons/haze-day.svg";
import HazeNight from "../weather-icons/haze-night.svg";
import Haze from "../weather-icons/haze.svg";
import Humidity from "../weather-icons/humidity.svg";
import Hurricane from "../weather-icons/hurricane.svg";
import LightningBolt from "../weather-icons/lightning-bolt.svg";
import NotAvailable from "../weather-icons/not-available.svg";
import OvercastDay from "../weather-icons/overcast-day.svg";
import OvercastNight from "../weather-icons/overcast-night.svg";
import Overcast from "../weather-icons/overcast.svg";
import PartlyCloudyDayDrizzle from "../weather-icons/partly-cloudy-day-drizzle.svg";
import PartlyCloudyNightHail from "../weather-icons/partly-cloudy-night-hail.svg";
import PartlyCloudyNightHaze from "../weather-icons/partly-cloudy-night-haze.svg";
import PartlyCloudyNightRain from "../weather-icons/partly-cloudy-night-rain.svg";
import PartlyCloudyNight from "../weather-icons/partly-cloudy-night.svg";
import Rain from "../weather-icons/rain.svg";
import Raindrop from "../weather-icons/raindrop.svg";
import Raindrops from "../weather-icons/raindrops.svg";
import ThunderstormsDayRain from "../weather-icons/thunderstorms-day-rain.svg";
import ThunderstormsDay from "../weather-icons/thunderstorms-day.svg";
import ThunderstormsNightRain from "../weather-icons/thunderstorms-night-rain.svg";
import ThunderstormsNight from "../weather-icons/thunderstorms-night.svg";
import ThunderstormsRain from "../weather-icons/thunderstorms-rain.svg";
import Thunderstorms from "../weather-icons/thunderstorms.svg";
import Tornado from "../weather-icons/tornado.svg";
import Windy from "../weather-icons/wind.svg";

const WeatherDetails = ({ weatherArea }) => {
  if (!weatherArea) return null;

  const weatherImage = () => {
    // assuming all weather forecast follows the naming convention
    const { forecast } = weatherArea;
    let src = "";
    switch (forecast) {
      case "Clear Day":
        src = ClearDay;
        break;
      case "Clear Night":
        src = ClearNight;
        break;
      case "Cloudy":
        src = Cloudy;
        break;
      case "Light Rain":
        src = Drizzle;
        break;
      case "Fog Day":
        src = FogDay;
        break;
      case "Fog Night":
        src = FogNight;
        break;
      case "Fog":
        src = Fog;
        break;
      case "Hail":
        src = Hail;
        break;
      case "Haze Day":
        src = HazeDay;
        break;
      case "Haze Night":
        src = HazeNight;
        break;
      case "Haze":
        src = Haze;
        break;
      case "Humidity":
        src = Humidity;
        break;
      case "Hurricane":
        src = Hurricane;
        break;
      case "Lightning Bolt":
        src = LightningBolt;
        break;
      case "Overcast":
        src = Overcast;
        break;
      case "Overcast Day":
        src = OvercastDay;
        break;
      case "Overcast Night":
        src = OvercastNight;
        break;
      case "Partly Cloudy Day Drizzle":
        src = PartlyCloudyDayDrizzle;
        break;
      case "Partly Cloudy Night Hail":
        src = PartlyCloudyNightHail;
        break;
      case "Partly Cloudy Night Haze":
        src = PartlyCloudyNightHaze;
        break;
      case "Partly Cloudy Night Rain":
        src = PartlyCloudyNightRain;
        break;
      case "Partly Cloudy Night":
        src = PartlyCloudyNight;
        break;
      case "Showers":
        src = Rain;
        break;
      case "Raindrop":
        src = Raindrop;
        break;
      case "Raindrops":
        src = Raindrops;
        break;
      case "Thundery Showers":
        src = ThunderstormsDayRain;
        break;
      case "Thunderstorms Day":
        src = ThunderstormsDay;
        break;
      case "Thunderstorms Night Rain":
        src = ThunderstormsNightRain;
        break;
      case "Thunderstorms Night":
        src = ThunderstormsNight;
        break;
      case "Thunderstorms Rain":
        src = ThunderstormsRain;
        break;
      case "Thunderstorms":
        src = Thunderstorms;
        break;
      case "Tornado":
        src = Tornado;
        break;
      case "Windy":
        src = Windy;
        break;
      default:
        src = NotAvailable;
        break;
    }

    return (
      <Card.Img
        src={src}
        alt={weatherArea.forecast}
        className="weather-image"
      />
    );
  };

  return (
    <Card className="text-center">
      <Card.Body>
        {weatherImage()}
        <div>
          <h3 className="text-custom">{weatherArea.area}</h3>
          <h4 className="text-custom">{weatherArea.forecast}</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherDetails;
