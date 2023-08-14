"use client";
import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "./services/weatherService";
import "./App.scss";
import CurrentWeather from "./components/CurrentWeather";
import { Weather } from "./types/weatherTypes";
import SearchBar from "./components/SearchBar";
import WeatherIcon from "./components/WeatherIcon";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [cityName, setCityName] = useState<string>("");

  const fetchData = async () => {
    try {
      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container-fluid text-center">
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="weather-app">
            <SearchBar
              cityName={cityName}
              onCityChange={setCityName}
              onSearch={fetchData}
            />
          </div>
          <div className="row">
            {weatherData && (
              <div className="weather-info">
                <WeatherIcon mainCondition={weatherData.weather[0].main} />
                <WeatherDetails
                  humidity={weatherData.main.humidity}
                  windSpeed={weatherData.wind.speed}
                  temperature={weatherData.main.temp}
                  location={weatherData.name}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
