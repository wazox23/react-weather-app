import axios from "axios";

export const fetchWeatherData = async (location: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=22c6691e20d56dd489504c945fb68fc2`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
