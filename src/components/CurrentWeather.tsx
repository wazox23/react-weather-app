import React from "react";

interface CurrentWeatherProps {
  temperature: number;
  condition: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  temperature,
  condition,
}) => {
  return (
    <div className="current-weather">
      <h1>{temperature}°C</h1>
      <p>{condition}</p>
    </div>
  );
};

export default CurrentWeather;
