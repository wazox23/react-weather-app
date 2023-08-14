import React from "react";
import humidityImage from "../assets/humidity.png";
import windImage from "../assets/wind.png";
import "../Styles/WeatherDetails.scss";

interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
  temperature: number;
  location: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  humidity,
  windSpeed,
  temperature,
  location,
}) => {
  return (
    <div className="weather-details">
      <div className="weather-info-container">
        <div className="temperature fs-1 text-light fw-bold">
          {temperature} °C
        </div>
        <div className="city-container text-light fs-1">{location}</div>
        <div className="details-wrapper">
          <div className="humidity">
            <img
              src={humidityImage}
              className="humidity-image img-fluid"
              alt="humidity"
            />
            <div className="info text-light fst-italic">
              <p>{humidity}%</p>
              Humidity
            </div>
          </div>
          <div className="wind-speed">
            <img
              src={windImage}
              alt="wind speed"
              className="wind-image img-fluid"
            />
            <div className="info text-light fst-italic">
              <p>{windSpeed} km/h</p>
              Wind Speed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
