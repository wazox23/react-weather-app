import React from "react";
import clearImage from "../assets/clear.png";
import rainImage from "../assets/rain.png";
import snowImage from "../assets/snow.png";
import cloudsImage from "../assets/clouds.png";
import drizzleImage from "../assets/drizzle.png";
import mistImage from "../assets/mist.png";
import fogImage from "../assets/fog.png";

interface WeatherIconProps {
  mainCondition: keyof typeof WEATHER_ICON_MAPPING;
}

const WEATHER_ICON_MAPPING: { [key: string]: string } = {
  Clear: clearImage,
  Rain: rainImage,
  Snow: snowImage,
  Clouds: cloudsImage,
  Drizzle: drizzleImage,
  Mist: mistImage,
  Fog: fogImage,
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ mainCondition }) => {
  const iconFileName = WEATHER_ICON_MAPPING[mainCondition];

  return (
    <div className="weather-icon">
      <img src={iconFileName} alt="Weather Icon" className="pt-3" />
    </div>
  );
};

export default WeatherIcon;
